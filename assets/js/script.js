"use strict";

const elementToggleFunc = (element) => {
  if (element) element.classList.toggle("active");
};

// SIDEBAR
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
    sidebarBtn.setAttribute("aria-expanded", String(sidebar.classList.contains("active")));
  });
}

// TESTIMONIOS / MODAL
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
let lastFocusedElement = null;

const setModalState = (open) => {
  if (!modalContainer || !overlay) return;

  modalContainer.classList.toggle("active", open);
  overlay.classList.toggle("active", open);
  modalContainer.setAttribute("aria-hidden", String(!open));

  if (open) {
    lastFocusedElement = document.activeElement;
    modalCloseBtn?.focus();
  } else if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
};

const openTestimonial = (item) => {
  if (!modalImg || !modalTitle || !modalText) return;

  const avatar = item.querySelector("[data-testimonials-avatar]");
  const title = item.querySelector("[data-testimonials-title]");
  const text = item.querySelector("[data-testimonials-text]");

  if (!avatar || !title || !text) return;

  modalImg.src = avatar.src;
  modalImg.alt = avatar.alt;
  modalTitle.textContent = title.textContent;
  modalText.innerHTML = text.innerHTML;
  setModalState(true);
};

testimonialsItems.forEach((item) => {
  item.addEventListener("click", () => openTestimonial(item));
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTestimonial(item);
    }
  });
});

modalCloseBtn?.addEventListener("click", () => setModalState(false));
overlay?.addEventListener("click", () => setModalState(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalContainer?.classList.contains("active")) {
    setModalState(false);
  }
});

// FILTRO DE PORTAFOLIO
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterProjects = (filterKey) => {
  filterItems.forEach((item) => {
    const matches = filterKey === "all" || filterKey === item.dataset.category;
    item.classList.toggle("active", matches);
  });
};

if (select) {
  select.addEventListener("click", () => {
    elementToggleFunc(select);
    select.setAttribute("aria-expanded", String(select.classList.contains("active")));
  });
}

selectItems.forEach((item) => {
  item.addEventListener("click", () => {
    const filterKey = item.dataset.selectKey;
    if (!filterKey) return;

    if (selectValue) selectValue.textContent = item.textContent;
    filterProjects(filterKey);

    if (select) {
      select.classList.remove("active");
      select.setAttribute("aria-expanded", "false");
    }
  });
});

let lastClickedFilterButton = filterButtons[0] ?? null;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterKey = button.dataset.filterKey;
    if (!filterKey) return;

    if (selectValue) selectValue.textContent = button.textContent;
    filterProjects(filterKey);

    lastClickedFilterButton?.classList.remove("active");
    button.classList.add("active");
    lastClickedFilterButton = button;
  });
});

// FORMULARIO DE CONTACTO
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  const updateFormState = () => {
    formBtn.disabled = !form.checkValidity();
  };

  formInputs.forEach((input) => input.addEventListener("input", updateFormState));
  updateFormState();
}

// NAVEGACIÓN
// El texto visible está desacoplado del identificador lógico mediante data-nav-target.
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    const target = navigationLink.dataset.navTarget;
    if (!target) return;

    pages.forEach((page) => page.classList.toggle("active", page.dataset.page === target));

    navigationLinks.forEach((link) => {
      const isActive = link === navigationLink;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    window.scrollTo({ top: 0, behavior: "auto" });
  });
});
