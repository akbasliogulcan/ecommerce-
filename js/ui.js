//************************************************************* */
//************************************************************* */
//************************************************************* */

const elements = {
           menuIcon: document.querySelector('#menu-icon'),
           menu: document.querySelector('.navbar'),
           productList: document.querySelector('#product-list'),
};


const renderProducts = (products) => {

           const productsHtml = products.map((product) => `
            <div class="product">
                                            <img src="" alt="product-image" class="product-image">
                                            <div class="product-info">
                                                       <h2 class="product-title">shoes</h2>
                                                       <p class="product-price">23232$</p>
                                                       <a href="#" class="add-to-cart">Add to Cart</a>
                                            </div>
                                 </div>`)
                      .join("");
           //*htmli arayüze aktar
           elements.productList.innerHTML = productsHtml

};

export { elements, renderProducts };