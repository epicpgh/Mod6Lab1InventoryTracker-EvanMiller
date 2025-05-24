"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    get price() {
        return this.price * (Product.taxRate + 1);
    }
    set price(priceWithTax) {
        this.price = priceWithTax;
    }
    displayDetails() {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
    }
}
Product.taxRate = 0.07;
exports.default = Product;
