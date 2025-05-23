//Properties: sku (string), name (string), price (number).

//displayDetails() - a method that returns a formatted string with the product’s details.
//getPriceWithTax() - a method that calculates the final price of the product with tax.


export class Product {
    sku: string;
    name: string;
    price: number;
  
    constructor(sku: string, name: string, price: number) {
      this.sku = sku;
      this.name = name;
      this.price = price;
    }
  

  displayDetails(): string {
    return `${this.sku} name: ${this.name} costs $${this.price}`;
  }
  getPriceWithTax(taxRate: number = 0.07): number {
    return this.price * (1 + taxRate);
  }
}
  


const product1 = new Product ("sku:12345", "MetaQuest3" , 500);





      





