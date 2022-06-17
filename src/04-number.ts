(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('product price', productPrice);

  let customerAge: number = 29;
  customerAge += 1
  console.log('Customer age', customerAge);

  let productStock: number;
  console.log('producstock', productStock);

  if (productStock > 10){
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if ( discount <= 200 ) {
    console.log('applu');
  }else {
    console.log('no aplly');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('binario', bin);

  const myNumber: number = 10;
})();
