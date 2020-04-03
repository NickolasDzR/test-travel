const menuBtn = document.querySelector(".menu-btn");
const slideMenu = document.querySelector(".slide-menu");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slideMenu.classList.toggle("slide-menu_active");
    menuBtn.classList.toggle("menu-btn_active");
    document.body.classList.toggle("overflowHidden");
});