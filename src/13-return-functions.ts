(()=> {
  const calcTotal = (prices: number[]): string => {
    const rta = prices.reduce(
      (previous, current) => previous + current, 0);
    return rta.toString();
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log('el total es: ', rta);
    return rta;
  }

  const operation = printTotal([1,2,3,4])
  console.log(operation);

})();
