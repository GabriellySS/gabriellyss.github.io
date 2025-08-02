const toggleTheme = document.getElementById("toggle-theme");
const rootHTML = document.documentElement;

function changeTheme() {
  const currentTheme = rootHTML.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHTML.setAttribute("data-theme", "light")
    : rootHTML.setAttribute("data-theme", "dark");

  localStorage.setItem("theme", rootHTML.getAttribute("data-theme"));

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
