"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("./Products"));
class DigitalProduct extends Products_1.default {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    displayDetails() {
        return `${this.sku} name: ${this.name} costs $${this.price} and download  size is ${this.fileSize}`;
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedFileSize() {
        const megabytes = this.fileSize / (1024 * 1024);
        return `${megabytes.toFixed(2)} MB`;
    }
}
exports.default = DigitalProduct;
