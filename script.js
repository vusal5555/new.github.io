const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar--right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".navbar--link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  
}))


window.addEventListener("scroll", function() {
  const navMenu = document.querySelector(".navbar--right");
  navMenu.classList.toggle("sticky", window.scrollY > 0)

})


