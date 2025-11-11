//*amaç: add to cart 'a tıklanıldığında ürünün değerini arttır  ya da ürün yoksa ürün ekle

import { saveToLocalStorage, getFromLocalStorage, updateCartIcon, displayCartTotal } from "./helper.js";
import { renderCartItems } from "./ui.js";

let cart = getFromLocalStorage();


//*sepete ürün ekleme fonksiyonu */
const addTocart = (products, e) => {
           // add-to-cart butonların tıklandığında butonları birbirinden ayırt etmek için bunlara data-id ile birer uniq id atadık.
           // Bu sayede bu butonların birbirinde farklı olmasını sağladık.

           //tıklanılan elemanın id eriş
           const productId = (+e.target.dataset.id);

           //id si bilinen ürünü bul
           const product = products.find((product) => product.id === productId);


           //*Ürün sepette var mı ? Yoksa yeni mi ekleniyor.      
           if (product) {
                      //*ürün sepette var mı kontrol et
                      const exitingItem = cart.find((item) => item.id === productId);
                      if (exitingItem) {
                                 //*ürünün değerini 1 arttır.
                                 exitingItem.quantity++;
                      }

                      else {
                                 //*hangi üründen kaç tane oldu.karar vermek için cart yapısı gerekiyor. bunun için obje oluşturduk
                                 const cartItem = {
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            image: product.image,
                                            quantity: 1,
                                 };
                                 // *sepet dizisine oluşturulan elemanı ekle
                                 cart.push(cartItem);

                                 //*sepetteki ürün miktarını sepet iconuna yansıt
                                 updateCartIcon(cart);




                      }

                      saveToLocalStorage(cart);




                      //add to cart'a tıklandıktan sonra Added çevir.
                      e.target.innerText = "Added"

                      // eski haline geri getir
                      setTimeout(() => {
                                 e.target.innerText = "Add to Cart";
                      }, 1500);

           };

};


//*Sepetten ürün kaldıran fonksiyon
const removeFromCart = (e) => {

           //tıklanılan elemanın id eriş
           const productId = parseInt(e.target.dataset.id);

           //ürünü sepetten çıkar
           cart = cart.filter((item) => item.id !== productId);

           //localstorage güncelle
           saveToLocalStorage(cart);

           //arayüzü güncelle
           renderCartItems(cart);

           //*sepetteki ürün miktarını sepet iconuna yansıt
           updateCartIcon(cart);

           //*toplam fiyatı söyleyen fonksiyonu çağır
           displayCartTotal(cart);



}


//*sepetteki ürünlerin mikktarını güncelleyen fonksiyon
const onQuantityChange = (e) => {
           //*yeni miktar değeri
           const newQuantity = (+e.target.value);
           //*ürün id değeri*/
           const productId = (e.target.dataset.id);

           //! 1.Yeni miktar 0 'dan büyükse güncellenecek elemanın miktarını güncelle
           if (newQuantity > 0) {

                      //*Güncellenecek elememanı dizi içinde bul
                      const updatedItem = cart.find((item) => item.id == productId);
                      //*Güncellenecek elemanın miktarini güncelle
                      updatedItem.quantity = newQuantity;
                      //*localstorage güncelle
                      saveToLocalStorage(cart);
                      //*sepetteki ürün miktarını sepet iconuna yansıt
                      updateCartIcon(cart);

                      //*toplam fiyatı söyleyen fonksiyonu çağır
                      displayCartTotal(cart);
           }
           else {
                      alert("Miktar 1'den küçük olamaz. Ürünü sepetten kaldırın.");
           }



};


export { addTocart, removeFromCart, onQuantityChange };