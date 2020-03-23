function return1() {
  var probaValtozo;
  probavaltozo = 4+2;

  return probavaltozo;
}

function tester1() {
  var ertek1 = 2
  var ertek2 = return1();
  var ertek3;

  ertek3 = ertek1 * ertek2;
  console.log("Az összeszorzott érték: " + ertek3);
}

function paramEsReturn(valtozo1,valtozo2) {
  var valtozo3;
  valtozo3 = valtozo1 * valtozo2;
  return valtozo3;
}

function tester2() {
  var result = paramEsReturn(10,4)
  console.log("Az összeszoroztt eredmény: " + result);
}

