console.log("test")


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
console.log("test")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

