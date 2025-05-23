

export default class Product {
    public static taxRate = 0.07;
   
    sku: string;
    name: string;
    
   
    constructor(sku: string, name: string, price: number) {
      this.sku = sku;
      this.name = name;
      this.price = price;
    }
   
    get price(): number {
      return this.price * (Product.taxRate + 1);
    }
    set price(priceWithTax: number) {
      this.price = priceWithTax;
    }
   
    protected displayDetails(): string {
      return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
    }
  }