import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };

// --- Глобальні функції ( window.name ) ---

// Перемикання вкладок
window.openTab = function (evt, tabName) {
  // 1. Ховаємо всі блоки з контентом
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // 2. Знімаємо клас "active" з усіх навігаційних кнопок
  const navButtons = document.getElementsByClassName("nav-btn");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("active");
  }

  // 3. Показуємо поточну вкладку і робимо кнопку активною
  const currentTab = document.getElementById(tabName);
  if (currentTab) {
    currentTab.classList.add("active");
  }

  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
};

// Функція для мобільного бургер-меню
window.toggleMenu = function () {
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById("navLinks");
    const burgerMenu = document.querySelector(".burger-menu");
    const navOverlay = document.getElementById("navOverlay");
    const navbar = document.querySelector(".navbar");

    if (navLinks && burgerMenu && navOverlay && navbar) {
      navLinks.classList.toggle("open");
      burgerMenu.classList.toggle("open");
      navbar.classList.toggle("menu-open");
      navOverlay.classList.toggle("active");
    }
  }
};

// Автоматичне закриття меню при виборі пункту (тільки на мобільних)
window.closeMenuOnSelect = function () {
  if (window.innerWidth <= 768) {
    const navLinks = document.getElementById("navLinks");
    if (navLinks && navLinks.classList.contains("open")) {
      toggleMenu(); // Просто викликаємо ту ж функцію, щоб закрити
    }
  }
};
