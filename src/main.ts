import PhysicalProducts  from './models/PhysicalProducts';
import DigitalProducts  from './models/DigitalProducts';
import products  from './models/Products';


const Products: products[] = [


  new PhysicalProducts('SKU1001', 'Wireless Mouse', 25.99, 1.5),
  new DigitalProducts('SKU2001', 'E-book: Learn TypeScript', 10.99, 1.2),
]