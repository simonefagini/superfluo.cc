// Pick the theme before first paint: saved choice, else the system setting
(function () {
  const root = document.documentElement;
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    const button = document.getElementById("theme-toggle");
    if (button) {
      button.setAttribute("aria-label", theme === "dark" ? "switch to light mode" : "switch to dark mode");
    }
  }

  apply(saved() || (query.matches ? "dark" : "light"));

  // Follow the system until the visitor makes a choice
  query.addEventListener("change", (event) => {
    if (!saved()) apply(event.matches ? "dark" : "light");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("theme-toggle");
    apply(root.getAttribute("data-theme"));
    button.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", next); } catch (e) {}
      apply(next);
    });
  });
})();
