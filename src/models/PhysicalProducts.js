"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("./Products"));
class PhysicalProduct extends Products_1.default {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    displayDetails() {
        return `${this.sku} name: ${this.name} costs $${this.price} and weighs ${this.weight}`;
    }
    getPriceWithTax(taxRate = .1) {
        return this.price * (1 + taxRate);
    }
    get formattedWeight() {
        return `${(this.weight / 1000).toFixed(2)} kg`;
    }
}
exports.default = PhysicalProduct;
