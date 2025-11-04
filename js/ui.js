//************************************************************* */
//************************************************************* */
//************************************************************* */

const elements = {
           menuIcon: document.querySelector('#menu-icon'),
           menu: document.querySelector('.navbar'),
           productList: document.querySelector('#product-list'),
};


const renderProducts = (products, addTocartFunction) => {
           const productsHtml = products.map((product) => `
           
            <div class="product">
                                            <img src="${product.image}" >
                                            <div class="product-info">
                                                       <h2 class="product-title">${product.title}</h2>
                                                       <p class="product-price">${product.price}</p>
                                                       <a  class="add-to-cart" data-id='${product.id}'>Add to Cart</a>
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

export { elements, renderProducts };        