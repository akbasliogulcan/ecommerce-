import { elements } from "./ui.js";

// Localstorage'a ekleme yapan fonksiyon
const saveToLocalStorage = (cart) => {
           // Dışarıdan verilen elemanı  JSON.stringify ile stringe çevir ve localstorage'a ekle
           localStorage.setItem("cart", JSON.stringify(cart));
};



// Localstorage'dan eleman alan fonksiyon
const getFromLocalStorage = () => {
           // LocalStorage'daki cart key'ine sahip elemanları localstorage'dan al
           const strData = localStorage.getItem("cart");

           // Eğer localstorage'da veri varsa bunu JSON.parse ile dönüştür ve return et ama yoksa boş bir dizi return et
           return strData ? JSON.parse(strData) : [];
}; { };



//sepetteki ürün miktarını sepet iconuna yansıtma fonksiyonu
const updateCartIcon = (cart) => {
           //sepet ikonuna eriş
           const cartIcon = document.querySelector('#cart-icon');
           //sepet ikonundaki toplam ürün miktarına eriş
           const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
           //sepet ikonundaki ürün miktarını güncelle
           cartIcon.setAttribute('data-quantity', totalQuantity);

};


//*sepetteki toplam fiyatı hesaplayan fonksiyon
const calculateCartTotal = (cart) => {
           return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};



//*sepetteki toplam ürün miktarını renderlayan foknsiyon
const displayCartTotal = (cart) => {
           // Toplam ürün fiyatını hesaplayan fonksiyonu çalıştır
           const total = calculateCartTotal(cart);
           console.log(total);
           // Sepetteki toplam ürün fiyatını render et (ekrana bastır)
           elements.cartTotal.textContent = `Total:${total} $`;
           console.log(elements.cartTotal);
};



export { saveToLocalStorage, getFromLocalStorage, updateCartIcon, calculateCartTotal, displayCartTotal };