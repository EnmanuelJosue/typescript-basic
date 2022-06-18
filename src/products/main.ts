import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'product',
  createAt: new Date(),
  stock: 12,
  sizes: 'M',
});
addProduct({
  name: 'product 2',
  createAt: new Date(),
  stock: 12,
  sizes: 'M',
});
addProduct({
  name: 'product 3',
  createAt: new Date(),
  stock: 12,
  sizes: 'M',
});
console.log(products);
const total = calcStock();
console.log(total);
