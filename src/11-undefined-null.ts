(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: (number | null) = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'as';

  function hi(name: string | null) {
    let hello: string = 'hola V2 ';
    hello += name?.toLowerCase() || 'no body';
    // if (name) {
    //   hello += 'name';
    // }else {
    //   hello += 'nobody';
    // }
    console.log(hello);

  }

  hi('manolo');
  hi(null);

})();
