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

document.addEventListener("turbo:load", () => {
  const filters = document.querySelectorAll("[data-video-filter]");
  const cards = document.querySelectorAll("[data-video-card]");
  const modal = document.getElementById("video-modal");
  const frame = document.getElementById("video-modal-frame");
  const modalTitle = document.getElementById("video-modal-title");

  if (filters.length && cards.length) {
    filters.forEach((filter) => {
      if (filter.dataset.filterBound === "true") return;

      filter.addEventListener("click", () => {
        const activeCategory = filter.dataset.videoFilter;

        filters.forEach((item) => item.classList.remove("active"));
        filter.classList.add("active");

        cards.forEach((card) => {
          const shouldShow =
            activeCategory === "all" ||
            card.dataset.videoCategory === activeCategory;

          card.classList.toggle("is-hidden", !shouldShow);
        });
      });

      filter.dataset.filterBound = "true";
    });
  }

  if (
    !modal ||
    !frame ||
    !modalTitle ||
    modal.dataset.videoModalBound === "true"
  )
    return;

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    frame.src = "";
    modalTitle.textContent = "";
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".video-play-trigger");

    if (!trigger) return;

    const videoId = trigger.dataset.videoId;
    const title = trigger.dataset.videoTitle || "";

    if (!videoId) return;

    frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modalTitle.textContent = title;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-video-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  modal.dataset.videoModalBound = "true";
});
