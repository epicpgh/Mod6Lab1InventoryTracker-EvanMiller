
import Product from "./Products"

export default class DigitalProduct extends Product {
fileSize: number;

constructor(sku: string, name: string, price: number, fileSize: number){

    super(sku, name, price);
    this.fileSize = fileSize;
}

displayDetails(): string {
    return `${this.sku} name: ${this.name} costs $${this.price} and download  size is ${this.fileSize}` ;
}

getPriceWithTax(): number {
    return this.price;
}


get formattedFileSize(): string {
    const megabytes = this.fileSize / (1024 * 1024); 
    return `${megabytes.toFixed(2)} MB`;
  }

  
}


