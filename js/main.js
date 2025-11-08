//************************************************************* */
//************************************************************* */
//************************************************************* */


import fetchProducts from "./api.js";
import { addTocart } from "./cart.js";
import { getFromLocalStorage, updateCartIcon } from "./helper.js";
import { elements, renderCartItems, renderProducts } from "./ui.js";




//*bu kısım sayfa küçüldüğünde menu ikonunun aktifleşmesini sağlar.
elements.menuIcon.addEventListener("click", () => {
           elements.menu.classList.toggle('open-menu')
});


//*ürünleri al
fetchProducts();

document.addEventListener("DOMContentLoaded", async () => {

           //*arayüzdeysek verileri al ,sepette isek ürünleri renderla.
           //*hangi saydada old. karar ver


           const cart = getFromLocalStorage();




           if
                      (window.location.pathname.includes("/cart.html")) {

                      //*Sepet Sayfa işlemleri 

                      const cart = getFromLocalStorage();
                      renderCartItems(cart);

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


           //*sepetteki ürün miktarını sepet iconuna yansıtma*/
           updateCartIcon(cart);

});