document.addEventListener("DOMContentLoaded", () => {
    const topNav = document.querySelector(".top-nav");

    if (!topNav) return;

    const updateNavOnScroll = () => {
        if (window.scrollY > 50) {
            topNav.classList.add("scrolled");
        } else {
            topNav.classList.remove("scrolled");
        }
    };

    updateNavOnScroll();
 window.addEventListener("scroll", function () {
    const nav = document.querySelector(".top-nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
