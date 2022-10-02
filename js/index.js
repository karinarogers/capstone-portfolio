// GLOBAL VARIABLES
const modalOpen = document.querySelectorAll(".modal-open");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelectorAll(".modal-close");

//PROJECT SECTION
//open and close modals
modalOpen.forEach((btn) => {
  //show background overlay
  btn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    //show only modal with matching ID
    const id = `modal-${btn.id}`;
    const modalElement = overlay.querySelector(`#${id}`);
    modalElement?.classList.remove("hidden");
  });
});

modalClose.forEach((btn) => {
  //hide background overlay
  btn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    //reapply "hidden" to shown modal
    const modalElement = overlay.querySelector(".modal-block:not(.hidden)");
    modalElement?.classList.add("hidden");
  });
});

//define each project's details
const modalContents = [
  {
    id: "directory",
    image: "img/employee-directory.jpg",
    title: "Employee Directory",
    brief: "Organized catalog of employees",
    description:
      "Provides profiles of employees pulled from an API directory and uses a modal pop-up to display their information.",
    skill: ["JavaScript", "CSS", "HTML", "API", "Fetch"],
    link: "https://karinarogers.github.io/employee-directory/",
  },
  {
    id: "webapp",
    image: "img/web-app-dashboard.jpg",
    title: "Webapp Dashboard",
    brief: "This is a short brief",
    description:
      "Interactive dashboard displaying fictional stats using chart.js. Utilizes JS, HTML and CSS.",
    skill: ["JavaScript", "CSS", "HTML", "Chart.JS", "SVG animation"],
    link: "https://karinarogers.github.io/webapp-dashboard/",
  },
  {
    id: "wheel-game",
    image: "img/wheel-of-success-game.jpg",
    title: "Wheel Game",
    brief: "This is a short brief",
    description:
      "Generates a random phrase from an array. Players must guess which letters are in the phrase. Correctly guessed letters are revealed while too many wrong attempts results in 'Game Over'.",
    skill: ["JavaScript", "CSS", "HTML"],
    link: "https://karinarogers.github.io/wheel-of-fortune-game/",
  },
  {
    id: "gallery",
    image: "img/image-gallery.jpg",
    title: "Photo Gallery",
    brief: "This is a short brief",
    description:
      "A responsive photo gallery using baguetteBox.js and CSS grid. Implemented search feature.",
    skill: ["JavaScript", "CSS", "HTML", "BaguetteBox", "Search Box"],
    link: "https://karinarogers.github.io/photo-gallery/",
  },
  {
    id: "kcrafts",
    image: "img/Kcrafts-net.jpg",
    title: "Kcrafts Website",
    brief: "This is a short brief",
    description:
      "A fully functional ecommerce website selling handmade jewelry",
    skill: [
      "JavaScript",
      "CSS",
      "HTML",
      "Wordpress",
      "Klaviyo",
      "Payment Integration",
    ],
    link: "https://kcrafts.net",
  },
];

//create list of skills
function skills(skills) {
  return `
  <ul class="project-skills flex">
    ${skills.map((skill) => `<li class="skill-squares">${skill}</li>`).join("")}
  </ul>
  `;
}

//replace modal HTML with correspondnig project info
function modalTemplate(project) {
  return `
    <div class="modal-block flex hidden" id="modal-${project.id}">
      <img class="project-photo" src="${project.image}">
      <div class="text-container">
          <h2 class="project-title">${project.title}</h2>
          <h3 class="project-brief">${project.brief}</h3>
          <hr />
          <p class="project-description">${project.description}</p>
          ${skills(project.skill)}
      </div>
      <a href="${
        project.link
      }" target="_blank" class="view-project">View Site</a>
    </div>
  `;
}

document.getElementById("modal-content").innerHTML = `
  ${modalContents.map(modalTemplate).join("")}
`;
