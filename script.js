let openBtn = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close");

let navLayout = document.querySelector(".header__top__grid__right");


openBtn.addEventListener("click", function() {
    navLayout.style.height = "100vh";
});

closeBtn.addEventListener("click", function() {
    navLayout.style.height = "0";
})