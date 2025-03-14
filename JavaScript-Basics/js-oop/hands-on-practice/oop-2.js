class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(newQuantity) {
        this.quantity += newQuantity;
        return this.quantity;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }

    updateProductQuantity(productId, newQuantity) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            product.updateQuantity(newQuantity);
        } else {
            console.log("Product not found");
        }
    }

    findProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            return product;
        } else {
            console.log("Product not found by ID");
            return null;
        }
    }

    listAllProducts() {
        if (this.products.length === 0) {
            console.log("No products in inventory.");
        } else {
            this.products.forEach(product => console.log(product.getDetails()));
        }
    }

    getTotalValue() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
}

// Testing the system
const laptop = new Product(1, "Laptop", 1000, 10);
const mouse = new Product(2, "Mouse", 20, 50);

const inventory = new Inventory();
inventory.addProduct(laptop);
inventory.addProduct(mouse);

console.log("Initial Inventory:");
inventory.listAllProducts();

console.log("\nUpdating Laptop Quantity:");
inventory.updateProductQuantity(1, -2); // Reduce laptop quantity by 2
inventory.listAllProducts();

console.log("\nRemoving Mouse:");
inventory.removeProduct(2);
inventory.listAllProducts();

console.log("\nTotal Value of Inventory:");
console.log(`$${inventory.getTotalValue()}`);

console.log("\nFinding Product by ID:");
const foundProduct = inventory.findProductById(1);
if (foundProduct) {
    console.log(foundProduct.getDetails());
}