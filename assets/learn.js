/* Shared rendering for learn.html and lesson.html */

/* Sidebar block used on every lesson-layer page. `here` is a task number
   ("2.3"), a domain key ("d2"), or null. */
function renderLearnSide(here) {
  var openDomain = here && here.indexOf(".") > -1 ? taskDomain(here) : here;
  var prog = progressRead();

  var html = DOM_KEYS.map(function (k) {
    var d = DOMAINS[k];
    var p = progressFor(k);
    var isOpen = (k === openDomain);
    var row = '<li><a class="nav ' + (isOpen ? "on" : "") + '" href="learn.html#' + k + '">' +
      '<span class="idx">' + d.i + '</span>' + d.n +
      (p.done ? ' <span class="tick-done">' + p.done + '/' + p.total + '</span>' : '') +
      '</a></li>';
    if (!isOpen) return row;
    return row + domainTasks(k).map(function (n) {
      return '<li><a class="nav sub ' + (n === here ? "on" : "") + '" href="lesson.html?t=' + n + '">' +
        '<span class="tn">' + (prog[n] ? "✓" : n) + '</span>' + taskTitle(n) + '</a></li>';
    }).join("");
  }).join("");

  var el = document.getElementById("side-domains");
  if (el) el.innerHTML = html;

  var ps = document.getElementById("side-progress");
  if (ps) ps.innerHTML = sideProgressHTML();
}

/* Interactive check-your-understanding block. Renders into `mount`. */
function renderCheck(mount, chk) {
  var picked = null, checked = false;

  function draw() {
    var opts = chk.o.map(function (o, i) {
      if (checked) {
        var cls = "rev-opt" + (o.c ? " is-correct" : (picked === i ? " is-chosen-wrong" : ""));
        return '<div class="' + cls + '"><b>' + "ABCD"[i] + '</b><span>' + o.t +
          ' <span class="rev-tag">' + (o.c ? "✓" : (picked === i ? "✗" : "")) + '</span>' +
          '<span class="rev-why">' + o.w + '</span></span></div>';
      }
      return '<li class="opt ' + (picked === i ? "picked" : "") + '"><button data-pick="' + i + '">' +
        '<span class="bubble"></span><span class="opt-letter">' + "ABCD"[i] + '</span><span>' + o.t + '</span></button></li>';
    }).join("");

    mount.innerHTML =
      '<h2 class="q-text">' + chk.q + '</h2>' +
      '<p class="q-instruct">Select one response.</p>' +
      (checked
        ? '<div class="chk-res">' +
            '<span class="chk-verdict ' + (chk.o[picked] && chk.o[picked].c ? "ok" : "no") + '">' +
            (chk.o[picked] && chk.o[picked].c ? "Correct" : "Not quite") + '</span>' +
            opts +
            '<p class="rev-key"><b>Key idea.</b> ' + chk.key + '</p>' +
          '</div>' +
          '<div class="nav" style="margin-top:18px"><button class="btn ghost sm" id="chk-again">Try again</button></div>'
        : '<ul class="opts">' + opts + '</ul>' +
          '<div class="nav"><button class="btn sm" id="chk-go"' + (picked === null ? " disabled" : "") + '>Check answer</button></div>');

    mount.querySelectorAll("[data-pick]").forEach(function (b) {
      b.onclick = function () { picked = +b.dataset.pick; draw(); };
    });
    var go = document.getElementById("chk-go");
    if (go) go.onclick = function () { checked = true; draw(); };
    var again = document.getElementById("chk-again");
    if (again) again.onclick = function () { checked = false; picked = null; draw(); };
  }
  draw();
}

/* Full lesson body. Returns an HTML string for everything below the header. */
function renderLessonBody(n, L) {
  var d = DOMAINS[taskDomain(n)];

  var know = '<h2 class="sec">What you need to know</h2><div class="know">' +
    L.know.map(function (s) {
      return '<h3>' + s.h + '</h3>' + s.p.map(function (p) { return '<p>' + p + '</p>'; }).join("");
    }).join("") + '</div>';

  var table = '<h3 class="lab" style="margin:40px 0 12px">' + L.table.cap + '</h3>' +
    '<div class="ltable"><table><thead><tr>' +
    L.table.head.map(function (h) { return '<th>' + h + '</th>'; }).join("") +
    '</tr></thead><tbody>' +
    L.table.rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join("") + '</tr>';
    }).join("") + '</tbody></table></div>';

  var keyc = '<div class="keyc"><span class="lab">Key concept</span><p>' + L.keyc + '</p></div>';

  var traps = '<h2 class="sec">Exam traps</h2>' +
    '<p class="body">Wrong options the examiner reuses. Each of these is designed to look like diligence.</p>' +
    '<div class="traps">' + L.traps.map(function (t) {
      return '<div class="trap"><p class="tt">' + t.t + '</p><p>' + t.p + '</p></div>';
    }).join("") + '</div>';

  var check = '<h2 class="sec">Check your understanding</h2><div class="checkbox-q" id="check-mount"></div>';

  var ex = '<h2 class="sec">Practice exercise</h2>' +
    '<div class="exbox"><div class="exbox-head"><h3>' + L.ex.title + '</h3>' +
    '<span class="m">' + L.ex.mins + ' minutes · hands-on</span></div>' +
    '<ul class="exobj">' + L.ex.obj.map(function (o) { return '<li>' + o + '</li>'; }).join("") + '</ul>' +
    '<ol class="exsteps">' + L.ex.steps.map(function (s) {
      return '<li><div><p class="s">' + s.s + '</p>' +
        '<p class="sub"><b>Why</b>' + s.why + '</p>' +
        '<p class="sub"><b>Expect</b>' + s.res + '</p></div></li>';
    }).join("") + '</ol></div>';

  var src = '<h2 class="sec">Sources</h2>' +
    '<ul class="srclist">' + L.src.map(function (s) {
      return '<li><a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a></li>';
    }).join("") + '</ul>';

  /* footer navigation */
  var i = TASK_KEYS.indexOf(n);
  var prev = i > 0 ? TASK_KEYS[i - 1] : null;
  var next = i < TASK_KEYS.length - 1 ? TASK_KEYS[i + 1] : null;
  var foot = '<div class="lfoot">' +
    (prev ? '<a class="pv" href="lesson.html?t=' + prev + '"><span class="k">← Previous · ' + prev + '</span><span class="t">' + taskTitle(prev) + '</span></a>'
          : '<div class="pv empty"></div>') +
    '<div class="mid"><a class="btn ghost sm" href="domain.html?d=' + taskDomain(n) + '">Drill ' + d.n + '</a></div>' +
    (next ? '<a class="nx" href="lesson.html?t=' + next + '"><span class="k">Next · ' + next + ' →</span><span class="t">' + taskTitle(next) + '</span></a>'
          : '<a class="nx" href="exam.html?paper=c60"><span class="k">Curriculum complete →</span><span class="t">Sit Mock Exam 1</span></a>');

  return know + table + keyc + traps + check + ex + src + foot + '</div>';
}
