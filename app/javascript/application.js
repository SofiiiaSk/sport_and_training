// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("turbo:load", () => {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navbar || !toggle || !navLinks) return;

  const setMenuOpen = (isOpen) => {
    navbar.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  if (toggle.dataset.menuBound !== "true") {
    toggle.addEventListener("click", () => {
      setMenuOpen(!navbar.classList.contains("menu-open"));
    });

    toggle.dataset.menuBound = "true";
  }

  if (navLinks.dataset.menuBound !== "true") {
    navLinks.addEventListener("click", (event) => {
      if (event.target.closest(".nav-btn")) {
        setMenuOpen(false);
      }
    });

    navLinks.dataset.menuBound = "true";
  }
});
