//************************************************************* */
//************************************************************* */
//************************************************************* */

import { onQuantityChange, removeFromCart } from './cart.js';

const elements = {
  menuIcon: document.querySelector('#menu-icon'),
  menu: document.querySelector('.navbar'),
  productList: document.querySelector('#product-list'),
  cartContainer: document.querySelector("#cart-items"),
  cartTotal: document.querySelector("#cart-total"),
};

//* Ürün kartlarını render eden Fonks.
const renderProducts = (products, addTocartFunction) => {
  const productsHtml = products.map((product) => `
           
            <div class="product">
                                            <img src="${product.image}" >
                                            <div class="product-info">
                                                       <h2 class="product-title">${product.title}</h2>
                                                       <p class="product-price">${product.price}</p>
                                                       <a class="add-to-cart" data-id='${product.id}'>Add to Cart</a>
                                            </div>
                                 </div>`)
    .join("");
  //*htmli arayüze aktar
  elements.productList.innerHTML = productsHtml

  //*add to cartı izle . Elements'in olduğu yere yazmamamızın nedeni render edildikten sonra add to cart butonun gelmesi
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  //*queryselectorAll metodu ile gelen addtocardlar dizi şek.old.dolayı addevenlistener eklemeyiz.Tek tek erişmek en doğru olanı
  for (let i = 0; i < addToCartButtons.length; i++) {

    //*elemanlara eriş
    const addToCartButton = addToCartButtons[i];
    //*olay izleyicisi ekle
    // addToCartButton.addEventListener('click', () => { console.log("tık tık"); });
    addToCartButton.addEventListener('click', addTocartFunction);
    //*addTocartFunction  main'deki renderProducts(products, (e)) parametrelerinin e olanına denk geliyor.
    //*ve sonrasında     addTocart(products, e); kısmı ile addTocart fonskiynuna gidiyor.


  }


};

//*sepetteki ürünleri render eden Fonks.
const renderCartItems = (cart) => {
  elements.cartContainer.innerHTML = cart.map((item) =>


    `  <div class="cart-item">
              <img
                src="${item.image}"
                alt=""
              />

              <div class="cart-item-info">
                <h2 class="cart-title">${item.title}</h2>
                <input
                  type="number"
                  min="1"
                  value="${item.quantity}"
                  class="cart-item-quantity"
                  data-id='${item.id}'
                />
              </div>
              <h2 class="cart-item-price">$${item.price}</h2>
              <button class="remove-from-cart" data-id='${item.id}'>Remove</button>
            </div>     `
  )

    .join("");


  //*Remove işlemi yapan butonlara eriş
  const removeButtons = document.querySelectorAll('.remove-from-cart');
  //!remove butonlarına tıklama olayı eklemek için for döngüsü ekleiz çnkü bir dizi old.
  for (let i = 0; i < removeButtons.length; i++) {
    const removeButton = removeButtons[i];

    //remove butonuna tıklama olayı ekle
    removeButton.addEventListener('click', removeFromCart);
  };

  //*quantity inputlarına eriş
  const quantityInputs = document.querySelectorAll('.cart-item-quantity');
  //!quantity inputlarına tıklama olayı eklemek için for döngüsü ekleiz çnkü bir dizi old.
  for (let j = 0; j < quantityInputs.length; j++) {
    const quantityInput = quantityInputs[j];
    quantityInput.addEventListener("change", onQuantityChange);
  }

};

export { elements, renderProducts, renderCartItems };