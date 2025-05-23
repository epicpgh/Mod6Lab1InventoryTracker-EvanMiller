
import Product from "./Products"

export default class DigitalProduct extends Product {
fileSize: number;

constructor(sku: string, name: string, price: number, fileSize: number){

    super(sku, name, price);
    this.fileSize = fileSize;
}

displayDetails(): string {
    return `${this.sku} name: ${this.name} costs $${this.price} and download is ${this.fileSize}` ;
}

getPriceWithTax(taxRate: number = .1): number {
    return this.price * (1 + taxRate);
}
}

console.log(DigitalProduct);
