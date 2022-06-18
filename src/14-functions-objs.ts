(() => {
  type Sizes = 'M' | 'L';
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'hola',
    password: '12',
  });

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    sizes?: Sizes;
  }) => {
    products.push(data)
  };
  addProduct({
    title: 'product',
    createAt: new Date(),
    stock: 12,
    sizes: 'M'
  })
  console.log(products);

})();
