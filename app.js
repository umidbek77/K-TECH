// script.js
function toggleDropdown() {
  const langDiv = document.querySelector(".lang");
  langDiv.classList.toggle("active");
}

// Lokalizatsiya qilingan so'zlar
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
  },
  uz: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    projects: "Loyihalar",
    services: "Xizmatlar",
    contact: "Bog'lanish",
  },
};

// Tilni almashtirish funksiyasi
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    el.textContent = translations[lang][key];
  });

  // Tanlangan tilni saqlash (localStorage orqali)
  localStorage.setItem("lang", lang);
  document.querySelector(".lang").classList.remove("active");
}

// Sahifa yuklanganda localStorage'dan tilni o'qish
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uz";
  changeLanguage(savedLang);
});
