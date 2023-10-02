const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");  

menuBar.addEventListener ("click", () => { 
    menuBar.classList.toggle("is-active");
});

window.addEventListener ("scroll", () => {
    menuNav.classList.toggle("nav-scroll", window.scrollY>0);
    

windowsPosition = window.scrollY > 150;
    hamburger.classList.toggle("btn-active", windowsPosition);
});