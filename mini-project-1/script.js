const navButton = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});