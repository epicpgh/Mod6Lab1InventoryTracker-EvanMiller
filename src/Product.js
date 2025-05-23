"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, inStock = true) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    displayDetails() {
        return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
    }
}
exports.Product = Product;
const laptop = new Product("Laptop", 1200, false);
const tv = new Product("LG TV", 200);
console.log(laptop);
console.log(laptop.name);
console.log(laptop.price);
console.log(laptop.inStock);
// console.log(laptop.displayDetails());
console.log(laptop.displayDetails());
console.log(tv.displayDetails());
