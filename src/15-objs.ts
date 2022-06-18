(() => {
  type Sizes = 'M' | 'L';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    sizes?: Sizes;
  };
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'hola',
    password: '12',
  });

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  };
  addProduct({
    title: 'product',
    createAt: new Date(),
    stock: 12,
    sizes: 'M'
  })
  products.push({
    title: 'prod',
    createAt: new Date(),
    stock: 12,
    sizes: 'L'
  })
  console.log(products);

})();
