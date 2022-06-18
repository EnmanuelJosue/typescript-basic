export type Sizes = 'M' | 'L';
export type Product = {
  name: string;
  createAt: Date;
  stock: number;
  sizes?: Sizes;
};
