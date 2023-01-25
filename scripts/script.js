// JavaScript Document
console.log("hi");

const deMenuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");
const deSluitButton = document.querySelector("header div button");

deMenuButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

// functie om hamburger te openen en img te veranderen
function toggleMenu() {
	deNav.classList.toggle("open");
    deMenuButton.classList.toggle("menuOpen");
}
