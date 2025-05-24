"use strict";
//Properties: sku (string), name (string), price (number).
Object.defineProperty(exports, "__esModule", { value: true });
//displayDetails() - a method that returns a formatted string with the product’s details.
//getPriceWithTax() - a method that calculates the final price of the product with tax.
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.sku} name: ${this.name} costs $${this.price}`;
    }
    getPriceWithTax(taxRate = 0.07) {
        return this.price * (1 + taxRate);
    }
}
exports.default = Product;
const product1 = new Product("sku:12345", "MetaQuest3", 500);
