// Cambiar entre secciones del "blog"
const navButtons = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll(".section");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;

    // activar botón
    navButtons.forEach((b) => b.classList.remove("nav__link--active"));
    btn.classList.add("nav__link--active");

    // mostrar sección
    sections.forEach((sec) => {
      if (sec.id === targetId) {
        sec.classList.add("section--active");
      } else {
        sec.classList.remove("section--active");
      }
    });

    // scroll suave al inicio
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// marcar Intro activo al inicio
if (navButtons.length) {
  navButtons[0].classList.add("nav__link--active");
}

// Botón scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle claro / oscuro
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(light) {
  if (light) {
    root.classList.add("light");
    themeToggle.textContent = "🌙 Modo oscuro";
  } else {
    root.classList.remove("light");
    themeToggle.textContent = "☀️ Modo claro";
  }
}

let isLight = false;

themeToggle.addEventListener("click", () => {
  isLight = !isLight;
  setTheme(isLight);
});
