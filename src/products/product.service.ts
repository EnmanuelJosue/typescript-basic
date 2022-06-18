import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data)
};

export const calcStock = (): number  => {
  const rta = products.reduce((act, current) => act + current.stock, 0);
  return rta;
}
