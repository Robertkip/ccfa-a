/* CCAO-F study site — lesson curriculum spine.
   Loaded after data.js, before the lessons-d*.js files.
   Task numbers are derived from the blueprint task statements in DOMAINS[k].o,
   so 1.1 is the first task statement of Domain 1 and so on. 30 in total. */

var LESSONS = {};

/* Ordered list of every task number, e.g. ["1.1","1.2",...,"7.3"] */
var TASK_KEYS = (function () {
  var out = [];
  DOM_KEYS.forEach(function (k, di) {
    DOMAINS[k].o.forEach(function (_, oi) {
      out.push((di + 1) + "." + (oi + 1));
    });
  });
  return out;
})();

/* "2.3" -> "d2" */
function taskDomain(n) {
  return "d" + n.split(".")[0];
}

/* "2.3" -> the blueprint task statement text */
function taskTitle(n) {
  var p = n.split(".");
  return DOMAINS["d" + p[0]].o[+p[1] - 1];
}

/* Task numbers belonging to one domain, in order */
function domainTasks(k) {
  return TASK_KEYS.filter(function (n) { return taskDomain(n) === k; });
}

/* ---------- progress (localStorage) ---------- */
var PROGRESS_KEY = "ccaof.progress.v1";

function progressRead() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch (e) { return {}; }
}

function progressWrite(o) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(o)); }
  catch (e) { /* private browsing, quota, or storage disabled — study still works */ }
}

function isDone(n) { return progressRead()[n] === true; }

function setDone(n, v) {
  var p = progressRead();
  if (v) { p[n] = true; } else { delete p[n]; }
  progressWrite(p);
  return v;
}

function toggleDone(n) { return setDone(n, !isDone(n)); }

/* {done, total, pct} across a domain, or across everything when k is omitted */
function progressFor(k) {
  var p = progressRead();
  var list = k ? domainTasks(k) : TASK_KEYS;
  var done = list.filter(function (n) { return p[n] === true; }).length;
  return { done: done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
}

function progressReset() { progressWrite({}); }

/* Renders the shared sidebar progress readout used on learn.html and lesson.html */
function sideProgressHTML() {
  var g = progressFor();
  return '<div class="sideprog">' +
    '<div class="sideprog-top"><span>Lessons done</span><b>' + g.done + '/' + g.total + '</b></div>' +
    '<div class="pbar"><i style="width:' + g.pct + '%"></i></div>' +
    '</div>';
}
