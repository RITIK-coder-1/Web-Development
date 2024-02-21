function Product(name, category, price, stock) {
    this.name = name
    this.category = category
    this.price = price
    this.stock = stock
}

function Inventory() {
    this.products = []
}


Inventory.prototype.addProduct = function(product){
    this.products.push(product)
    console.log(`Added ${product.name} to the inventory.`);
}

Inventory.prototype.deleteProduct = function(name){
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].name.toLowerCase() === name.toLowerCase()) { // in case the case of the names do not match!
            this.products.splice(i, 1);   
        } else {
            console.log("This product is not present in the inventory!");
        }   
        break // exit the loop deleting the product
    }
}

Inventory.prototype.showProducts = function(){
    console.log(this.products);
}

const inventory = new Inventory()

const product1 = new Product("Laptop", "Electronics", 19999, 1000)
const product2 = new Product("Book", "Books", 199, 50)

inventory.addProduct(product1)
inventory.addProduct(product2)

// inventory.showProducts()

inventory.deleteProduct("Iphone")
inventory.deleteProduct("Laptop")

inventory.showProducts()

inventory.deleteProduct("book")

inventory.showProducts()