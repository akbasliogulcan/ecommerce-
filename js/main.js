//************************************************************* */
//************************************************************* */
//************************************************************* */


import fetchProducts from "./api.js";
import { addTocart } from "./cart.js";
import { elements, renderProducts } from "./ui.js";


//*bu kısım sayfa küçüldüğünde menu ikonunun aktifleşmesini sağlar.
elements.menuIcon.addEventListener("click", () => {
           elements.menu.classList.toggle('open-menu')
});


//*ürünleri al
fetchProducts();

document.addEventListener("DOMContentLoaded", async () => {

           //*arayüzdeysek verileri al ,sepette isek ürünleri renderla.
           //*hangi saydada old. karar ver

           if
                      //*cart.html deysen           
                      (window.location.pathname.includes("../cart.html")) {
           }
           else {
                      //*Anasayfaysan apiden verileri al 
                      fetchProducts().then((products) => {
                                 renderProducts(products, (e) => {


                                            addTocart(products, e);

                                            // addTocart() callback fonksiyonu, ürünler ekrana geldikten sonra sepete ekleme işlevini aktif eder.
                                            // Yani render işlemi bittiğinde butonlara “sepete ekle” fonksiyonunu bağlar.
                                 });
                      })
                                 .catch((err) => {
                                            // console.log("Error" ` ${err}`);
                                 })
           }

});