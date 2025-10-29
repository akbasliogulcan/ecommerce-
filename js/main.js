import fetchProducts from "./api.js";


const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('.navbar');

console.log(menuIcon);
console.log(menu);

menuIcon.addEventListener("click", () => {
           menu.classList.toggle('open-menu')
});

fetchProducts();