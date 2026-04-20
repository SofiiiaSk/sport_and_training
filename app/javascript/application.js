// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
  function openTab(evt, tabName) {
    // 1. Отримуємо всі елементи з класом "tab-content"
    // Сюди входять і ваше "main", і "apps", і "video" тощо.
    const tabContents = document.querySelectorAll(".tab-content");
    
    // Також додамо сюди ваш блок тренувань, бо в HTML він без класу tab-content
    const trainingSection = document.getElementById("training-types-section");

    // Ховаємо всі вкладки
    tabContents.forEach(content => {
        content.style.display = "none";
        content.classList.remove("active");
    });

    // Окремо ховаємо секцію тренувань, якщо вона є
    if (trainingSection) {
        trainingSection.style.display = "none";
    }

    // 2. Прибираємо клас "active" у всіх кнопок навігації
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    // 3. Показуємо ту вкладку, на яку натиснули
    // Якщо натиснули на 'types', показуємо секцію тренувань
    if (tabName === 'types') {
        const targetTraining = document.getElementById("training-types-section");
        if (targetTraining) targetTraining.style.display = "block";
    } else {
        const targetTab = document.getElementById(tabName);
        if (targetTab) {
            targetTab.style.display = "block";
            targetTab.classList.add("active");
        }
    }

    // 4. Додаємо клас "active" кнопці, на яку натиснули (для підсвічування)
    evt.currentTarget.classList.add("active");
}