/* Theme toggle for Danielson Systems.
   Runs synchronously in <head> so the theme is set before first paint
   (no flash). Defaults to the visitor's system preference, and remembers
   a manual choice in localStorage. No framework, no dependencies. */
(function () {
  var root = document.documentElement;

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function resolveInitial() {
    try {
      var stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}
    return systemPrefersDark() ? "dark" : "light";
  }

  // Apply immediately, before the body paints.
  root.setAttribute("data-theme", resolveInitial());

  // Wire up the toggle button once the DOM is ready.
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    function sync() {
      var isDark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      btn.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    }

    sync();

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  });
})();
