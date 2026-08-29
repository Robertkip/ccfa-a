/* CCAO-F exam engine. Expects data.js + all bank-d*.js to be loaded first. */
(function(){
  var params = new URLSearchParams(location.search);
  var key = params.get("paper");
  if(!PAPERS[key]) key = "a30";
  var spec = PAPERS[key];

  var items = seededShuffle(buildPaper(key), key.charCodeAt(0) * 37 + spec.items);
  var answers = items.map(function(){return [];});
  var flags = items.map(function(){return false;});
  var cur = 0, timeLeft = spec.mins * 60, timer = null, timed = true;

  var $ = function(id){return document.getElementById(id);};
  function show(id){
    ["screen-intro","screen-exam","screen-review","screen-report"].forEach(function(s){
      $(s).classList.add("hidden");
    });
    $(id).classList.remove("hidden");
    window.scrollTo(0,0);
  }

  /* ---- intro ---- */
  document.title = spec.name + " — CCAO-F";
  $("intro-name").textContent = spec.name;
  $("intro-blurb").textContent = spec.blurb;
  $("f-items").innerHTML = spec.items + " <small>items</small>";
  $("f-time").innerHTML = spec.mins + " <small>minutes</small>";
  $("f-pass").innerHTML = '720 <small>of 100–1000</small>';
  $("f-type").innerHTML = (spec.kind === "full" ? "Full" : "Half") + " <small>length</small>";
  var mix = {};
  items.forEach(function(it){ mix[it.d] = (mix[it.d]||0)+1; });
  $("intro-mix").innerHTML = DOM_KEYS.map(function(k){
    var n = mix[k]||0;
    return '<div class="dom-row"><span class="dom-name">'+DOMAINS[k].n+
      '<span>blueprint '+DOMAINS[k].w+'%</span></span>'+
      '<span class="dom-bar"><i style="width:'+Math.round(n/spec.items*100/0.22)+'%"></i></span>'+
      '<span class="dom-score">'+n+' items · '+Math.round(n/spec.items*100)+'%</span></div>';
  }).join("");

  /* ---- rendering ---- */
  function renderRail(){
    $("rail").innerHTML = items.map(function(_,i){
      var cls = ["tick", answers[i].length?"done":"", flags[i]?"flagged":"", i===cur?"here":""].join(" ");
      return '<button class="'+cls.trim()+'" data-go="'+i+'" aria-label="Question '+(i+1)+'">'+(i+1)+'</button>';
    }).join("");
    $("hud-count").textContent = answers.filter(function(a){return a.length;}).length + "/" + items.length;
  }

  function renderQ(){
    var q = items[cur];
    $("q-domain").textContent = DOMAINS[q.d].n;
    $("q-num").textContent = "Item " + (cur+1) + " of " + items.length;
    $("q-text").innerHTML = q.q;
    var inst = $("q-instruct");
    inst.textContent = q.pick === 1 ? "Select one response." : "Select " + q.pick + " responses.";
    inst.className = "q-instruct" + (q.pick > 1 ? " multi" : "");
    $("opts").innerHTML = q.o.map(function(o,i){
      var on = answers[cur].indexOf(i) > -1;
      return '<li class="opt '+(on?"picked":"")+'"><button data-pick="'+i+'" aria-pressed="'+on+'">'+
        '<span class="bubble"></span><span class="opt-letter">'+"ABCDE"[i]+'</span><span>'+o.t+'</span></button></li>';
    }).join("");
    $("flag").classList.toggle("on", flags[cur]);
    $("flag").textContent = flags[cur] ? "Flagged" : "Flag for review";
    $("prev").disabled = cur === 0;
    $("next").disabled = cur === items.length - 1;
    renderRail();
  }

  $("opts").addEventListener("click", function(e){
    var b = e.target.closest("[data-pick]"); if(!b) return;
    var i = +b.dataset.pick, q = items[cur], a = answers[cur];
    if(q.pick === 1){ answers[cur] = (a[0] === i) ? [] : [i]; }
    else {
      var at = a.indexOf(i);
      if(at > -1) a.splice(at,1);
      else if(a.length < q.pick) a.push(i);
      else { a.shift(); a.push(i); }
    }
    renderQ();
  });
  $("rail").addEventListener("click", function(e){
    var b = e.target.closest("[data-go]"); if(!b) return;
    cur = +b.dataset.go; renderQ();
  });
  $("prev").onclick = function(){ if(cur>0){cur--;renderQ();} };
  $("next").onclick = function(){ if(cur<items.length-1){cur++;renderQ();} };
  $("flag").onclick = function(){ flags[cur] = !flags[cur]; renderQ(); };
  document.addEventListener("keydown", function(e){
    if($("screen-exam").classList.contains("hidden")) return;
    if(e.key === "ArrowRight") $("next").click();
    if(e.key === "ArrowLeft") $("prev").click();
  });

  /* ---- timer ---- */
  function tick(){
    timeLeft--;
    var m = Math.floor(timeLeft/60), s = timeLeft%60;
    $("hud-timer").textContent = String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
    document.querySelector(".hud").classList.toggle("low", timeLeft <= 300);
    if(timeLeft <= 0){ clearInterval(timer); goReview(true); }
  }

  function start(withTimer){
    timed = withTimer;
    answers = items.map(function(){return [];});
    flags = items.map(function(){return false;});
    cur = 0; timeLeft = spec.mins * 60;
    if(timer) clearInterval(timer);
    $("hud-timer-wrap").style.display = withTimer ? "" : "none";
    if(withTimer){
      $("hud-timer").textContent = spec.mins + ":00";
      timer = setInterval(tick, 1000);
    }
    renderQ(); show("screen-exam");
  }
  $("begin").onclick = function(){ start(true); };
  $("begin-untimed").onclick = function(){ start(false); };

  /* ---- review ---- */
  function goReview(timeUp){
    var un = answers.filter(function(a){return !a.length;}).length;
    var fl = flags.filter(Boolean).length;
    $("rev-meta").textContent = timeUp ? "Time expired" : "Nothing is scored until you submit";
    $("rev-lede").textContent = timeUp
      ? "Time is up. Submit to see your score report — anything left blank is marked incorrect, exactly as it would be."
      : un + " unanswered, " + fl + " flagged. Blank answers score zero, so a considered guess beats nothing.";
    $("rev-list").innerHTML = items.map(function(q,i){
      var tag = !answers[i].length ? '<span class="tagx none">Unanswered</span>'
        : flags[i] ? '<span class="tagx flag">Flagged</span>'
        : '<span class="tagx ok">Answered</span>';
      return '<li><span class="n">Item '+(i+1)+'</span><span>'+DOMAINS[q.d].n+'</span>'+tag+'</li>';
    }).join("");
    show("screen-review");
  }
  $("toreview").onclick = function(){ goReview(false); };
  $("backtoexam").onclick = function(){ renderQ(); show("screen-exam"); };

  /* ---- scoring ---- */
  function isRight(i){
    var correct = items[i].o.map(function(o,j){return o.c?j:-1;})
      .filter(function(j){return j>-1;}).sort().join(",");
    return answers[i].slice().sort().join(",") === correct;
  }

  $("submit").onclick = function(){
    if(timer) clearInterval(timer);
    var results = items.map(function(_,i){return isRight(i);});
    var raw = results.filter(Boolean).length;
    var pct = raw / items.length;
    var scaled = Math.round(100 + pct * 900);
    var passed = scaled >= 720;

    $("verdict-slot").innerHTML = '<span class="verdict '+(passed?"pass":"fail")+'">'+(passed?"Pass":"Not yet")+'</span>';
    $("report-head").textContent = passed
      ? "Above the line on " + spec.name + "."
      : "Below the line — and the report says where.";
    $("scaled").textContent = scaled;
    $("rawline").textContent = raw + " of " + items.length + " correct · scaled to 100–1000 · 720 to pass";
    setTimeout(function(){ $("scalefill").style.width = ((scaled-100)/900*100).toFixed(1)+"%"; }, 60);

    var byDom = {};
    items.forEach(function(q,i){
      byDom[q.d] = byDom[q.d] || {n:0,c:0};
      byDom[q.d].n++; if(results[i]) byDom[q.d].c++;
    });
    var weakest = null;
    $("domreport").innerHTML = DOM_KEYS.map(function(k){
      var d = byDom[k] || {n:0,c:0};
      var p = d.n ? Math.round(d.c/d.n*100) : 0;
      if(d.n && (!weakest || p < weakest.p)) weakest = {k:k, p:p};
      return '<div class="dom-row"><span class="dom-name">'+
        '<a href="learn.html#'+k+'" style="color:inherit">'+DOMAINS[k].n+'</a>'+
        '<span>'+DOMAINS[k].w+'% of exam</span></span>'+
        '<span class="dom-bar"><i class="'+(p<70?"weak":"")+'" style="width:'+p+'%"></i></span>'+
        '<span class="dom-score">'+p+'% · '+d.c+'/'+d.n+'</span></div>';
    }).join("");
    $("next-step").innerHTML = weakest
      ? 'Weakest domain: <b>'+DOMAINS[weakest.k].n+'</b> at '+weakest.p+'%, worth '+DOMAINS[weakest.k].w+'% of the real exam. '+
        '<a href="learn.html#'+weakest.k+'">Work its '+DOMAINS[weakest.k].o.length+' lessons →</a>'+
        '  ·  <a href="domain.html?d='+weakest.k+'">Drill its bank items →</a>'
      : "";

    $("fullreview").innerHTML = items.map(function(q,i){
      var ok = results[i];
      var opts = q.o.map(function(o,j){
        var chosen = answers[i].indexOf(j) > -1;
        var cls = "rev-opt" + (o.c ? " is-correct" : (chosen ? " is-chosen-wrong" : ""));
        var mark = o.c ? "✓" : (chosen ? "✗" : "");
        return '<div class="'+cls+'"><b>'+"ABCDE"[j]+'</b><span>'+o.t+
          ' <span class="rev-tag">'+mark+(chosen?" your answer":"")+'</span>'+
          '<span class="rev-why">'+o.w+'</span></span></div>';
      }).join("");
      return '<div class="rev-item"><span class="rev-mark '+(ok?"ok":"no")+'">Item '+(i+1)+
        ' · '+(ok?"Correct":"Incorrect")+' · '+DOMAINS[q.d].n+'</span>'+
        '<p class="rev-q">'+q.q+'</p>'+opts+
        '<p class="rev-key"><b>Key idea.</b> '+q.key+'</p></div>';
    }).join("");

    show("screen-report");
  };

  $("retake").onclick = function(){ start(timed); };
})();
