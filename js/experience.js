// GLOBAL VARIABLES
const panels = document.querySelectorAll(".gallery-panel");

//PHOTO GALLERY SECTION
//loop through panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
