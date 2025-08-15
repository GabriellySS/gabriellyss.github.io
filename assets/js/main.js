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

// Adiciona a classe visible aos elementos com a classe fade-scroll quando eles entram na viewport
const elements = document.querySelectorAll(".fade-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elements.forEach((el) => observer.observe(el));

function updateFrontEndSkills(profileData) {
  const frontEndSkills = document.getElementById('front-end-skills');
  frontEndSkills.innerHTML = profileData.skills.frontEndSkills.join(' / ');
};

function updateDesignSkills(profileData) {
  const designSkills = document.getElementById('design-skills');
  designSkills.innerHTML = profileData.skills.designSkills.join(' / ')
;}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('soft-skills');
  softSkills.innerHTML = profileData.skills.softSkills.join(' / ');
};

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('projects-group');
  portfolio.innerHTML = profileData.portfolio.map(project => {
    return `
    <section class="project">
          <img src="${project.photo}" alt="" class="project-img" />
          <div>
            <h4>${project.name}</h4>
            <p>
              ${project.description}
            </p>
            <section class="project-btns">
              <a href="${project.urlPrevia}" target="_blank"
                rel="noopener noreferrer"><button class="btn-project btn-project-primary">
                  Prévia
                </button></a>
              <a href="${project.urlRepositorio}" target="_blank" rel="noopener noreferrer"><button
                  class="btn-project btn-project-secondary">
                  Repositório
                </button></a>
            </section>
          </div>
        </section>
    `
  }).join('');
};

(async () => {
  const profileData = await fetchProfileData();
  updateFrontEndSkills(profileData);
  updateDesignSkills(profileData);
  updateSoftSkills(profileData);
  updatePortfolio(profileData);
})()
