const fetchProducts = async () => {
           const res = await fetch("./db.json");


           const data = await res.json();
           console.log(data);


};

export default fetchProducts;
