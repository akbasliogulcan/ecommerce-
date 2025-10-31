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
};

export { saveToLocalStorage, getFromLocalStorage };