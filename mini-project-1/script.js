const navBtn = document.getElementById("navBtn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", function() {
    navMenu.classList.toggle("nav-menu-active");
})