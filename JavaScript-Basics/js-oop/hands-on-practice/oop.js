class Product {
    constructor(id,name,price,quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(newQuantity){
        this.quantity += newQuantity;
        return this.quantity;
    }

    getDetails(){
        const details = `ID:${this.id} Name: ${this.name}, Price:${this.price}, Quantity:${this.quantity}`
        return details;
    }
}

class Inventory {

    constructor(){
        this.products= [];
    }

    addProduct(product){
        return this.products.push(product);
    }

    removeProduct(productId){
        return this.products.pop(productId);
    }

    updateProductQuantity(productId, newQuantity){
        const product = this.products.find(p => p.id === productId);

        if (product){
            this.quantity += newQuantity;
        }
        else {
            console.log("Product not found");
        }
    }

    findProductById(productId){
        const findproduct = this.products.find(p => p.id === productId);

        if (findproduct){
            return this.products[findproduct];
        }
        else{
            console.log('Not found by Id');
        }
    }
    listAllProducts(){
        for (let i=0; i<this.products.length; i++){
            console.log(this.products[i]);
        }
    }
    getTotalValue(){
        let totalValue = 0;

        for (let i=0; i< this.products.length; i++){
            
        }
    }

}

const product_inst = new Product(1,'Laptop',1000,10);
const inventory_inst = new Inventory(['laptop','RTX','Controller','Remote','Tech Gadgets']);

inventory_inst.listAllProducts();

// inventory_inst.addProduct('Victus');
// console.log(product_inst.updateQuantity(2));
// console.log(product_inst.getDetails());