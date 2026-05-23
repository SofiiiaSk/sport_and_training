import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };

window.toggleMenu = function () {
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById("navLinks");
    const burgerMenu = document.querySelector(".burger-menu");
    const navOverlay = document.getElementById("navOverlay");
    const navbar = document.querySelector(".navbar");

    navLinks.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    navbar.classList.toggle("menu-open");
    navOverlay.classList.toggle("active");
  }
};
window.closeMenuOnSelect = function () {
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById("navLinks");
    if (navLinks && navLinks.classList.contains("open")) {
      toggleMenu();
    }
  }
};
