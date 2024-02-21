// Function to find the maximum and minimum price products -------->

const products = [
    { name: "Mobile", price: 70000 },
    { name: "Laptop", price: 120000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile charger", price: 1500 }
];
function expensive_cheap_product(anyArray) {
    let mostExpensiveProduct = null;
    let leastExpensiveProduct = null;

    for (let i = 0; i < anyArray.length; i++) {
        for (let j = 0; j < anyArray.length; j++) {
            if (i !== j) { 
                if (!mostExpensiveProduct || anyArray[i].price > mostExpensiveProduct.price) {
                    mostExpensiveProduct = anyArray[i];
                }
                if (!leastExpensiveProduct || anyArray[i].price < leastExpensiveProduct.price) {
                    leastExpensiveProduct = anyArray[i];
                }
            }
        }
    }
    console.log(`The product ${mostExpensiveProduct.name} is the most expensive: ${mostExpensiveProduct.price} rupees`);
    console.log(`The product ${leastExpensiveProduct.name} is the least expensive: ${leastExpensiveProduct.price} rupees`);
}
expensive_cheap_product(products);
