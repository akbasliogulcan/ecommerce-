//************************************************************* */
//************************************************************* */
//************************************************************* */


import fetchProducts from "./api.js";
import { elements, renderProducts } from "./ui.js";

elements.menuIcon.addEventListener("click", () => {
           elements.menu.classList.toggle('open-menu')
});

fetchProducts();

document.addEventListener("DOMContentLoaded", async () => {

           //*arayüzdeysek verileri al ,sepette isek ürünleri renderla.
           //*hangi saydada old. karar ver

           if
                      //*cart.html deysen           
                      (window.location.pathname.includes("../cart.html")) {
           }
           else {
                      //*Anasaydaysan apiden verileri al 
                      fetchProducts().then((products) => {
                                 renderProducts(products);
                      })
                                 .catch((err) => {
                                            console.log("Error" ` ${err}`);
                                 })
           }

});