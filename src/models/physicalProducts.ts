import Product from "./Products"

export default class PhysicalProduct extends Product {
weight: number;

constructor(sku: string, name: string, price: number, weight: number){

    super(sku, name, price);
    this.weight = weight;
}

displayDetails(): string {
    return `${this.sku} name: ${this.name} costs $${this.price} and weighs ${this.weight}` ;
}

getPriceWithTax(taxRate: number = .1): number {
    return this.price * (1 + taxRate);
}
}
