const toggleTheme = document.getElementById("toggle-theme");
const rootHTML = document.documentElement;

// Mudança de tema light e dark
// Salva a preferência do usuário no localStorage
toggleTheme.addEventListener("click", () => {
  const currentTheme = rootHTML.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHTML.setAttribute("data-theme", "light")
    : rootHTML.setAttribute("data-theme", "dark");

  localStorage.setItem("theme", rootHTML.getAttribute("data-theme"));

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
});

// Adiciona borda ao navbar quando o usuário rola a página e remove quando volta ao topo
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  window.pageYOffset > 0
    ? navbar.classList.add("scroll-nav")
    : navbar.classList.remove("scroll-nav");
});

// Adiciona a classe active ao item do menu de navegação quando clicado
const navMenuItems = document.querySelectorAll(".nav-menu-item");

navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
