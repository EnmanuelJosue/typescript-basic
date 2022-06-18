(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLocaleLowerCase()

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar) .toFixed();

})();
