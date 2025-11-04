import { saveToLocalStorage, getFromLocalStorage } from "./helper.js";

const addTocart = (products, e) => {
           // add-to-cart butonların tıklandığında butonları birbirinden ayırt etmek için bunlara data-id ile birer uniq id atadık.
           // Bu sayede bu butonların birbirinde farklı olmasını sağladık.
           console.log(e);


           //tıklanılan elemanın id eriş
           const productId = (+e.target.dataset.id);


           //id si bilinen ürünü bul
           const product = products.find((product) => product.id === productId);
           console.log(product);
           saveToLocalStorage(product);


};
export { addTocart };