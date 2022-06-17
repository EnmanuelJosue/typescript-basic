(() => {
  let prices = [1,2,3,4];

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(1);
  mixed.push({});
  mixed.push([]);


})();
