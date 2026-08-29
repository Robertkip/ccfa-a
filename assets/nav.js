/* Top navigation: marks the active link and drives the theme toggle.
   The theme itself is applied by the inline <head> script on every page,
   before first paint, so there is no flash of the wrong palette. */

var THEME_KEY = "ccaof.theme";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* storage unavailable */ }
  var b = document.getElementById("themetoggle");
  if (b) b.setAttribute("aria-label", t === "light" ? "Switch to dark theme" : "Switch to light theme");
}

(function () {
  /* active link: match the nav href's page against this page */
  var here = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".topnav-links a");
  var best = null;
  for (var i = 0; i < links.length; i++) {
    var target = links[i].getAttribute("href").split(/[?#]/)[0];
    if (target === here) { best = links[i]; break; }
  }
  /* lesson pages belong under Learn */
  if (!best && here === "lesson.html") {
    for (var j = 0; j < links.length; j++) {
      if (links[j].getAttribute("href").indexOf("learn.html") === 0) { best = links[j]; break; }
    }
  }
  /* domain drill pages belong under Curriculum */
  if (!best && here === "domain.html") best = links[0];
  if (best) best.classList.add("on");

  var btn = document.getElementById("themetoggle");
  if (btn) {
    setTheme(currentTheme());
    btn.onclick = function () { setTheme(currentTheme() === "light" ? "dark" : "light"); };
  }
})();
