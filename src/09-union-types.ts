(() => {
  let userId: (string | number);
  userId = 12;
  userId = '2312';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed()}`);

    }
  }
  greeting('Nicolas')
  greeting(12.121);
})();
