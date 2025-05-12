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

// Til va Icon almashtirish
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang-key");
    el.textContent = translations[lang][key];
  });

  // Icon almashtirish
  const langIcon = document.querySelector(".lang-img");
  if (lang === "en") {
    langIcon.src = "./images/us.svg"; // Ingliz tili uchun flag
  } else if (lang === "uz") {
    langIcon.src = "./images/uz.svg"; // O'zbek tili uchun flag
  }

  // Tanlangan tilni localStorage'da saqlash
  localStorage.setItem("lang", lang);
  document.querySelector(".lang").classList.remove("active");
}

// Sahifa yuklanganda localStorage'dan tilni o'qish
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uz";
  changeLanguage(savedLang);
});
