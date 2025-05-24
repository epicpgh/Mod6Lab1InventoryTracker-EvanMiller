"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProducts_1 = __importDefault(require("./models/PhysicalProducts"));
const DigitalProducts_1 = __importDefault(require("./models/DigitalProducts"));
const Products = [
    new PhysicalProducts_1.default('SKU1001', 'Wireless Mouse', 25.99, 1.5),
    new DigitalProducts_1.default('SKU2001', 'E-book: Learn TypeScript', 10.99, 1.2),
];
