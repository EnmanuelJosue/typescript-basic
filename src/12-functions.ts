(() => {
  type Sizes = 'S' | 'M';

  function createProductToJson (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }
  const product1 = createProductToJson('P1', new Date(), 12);
  console.log(product1);

})();
