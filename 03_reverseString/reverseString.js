const reverseString = function (szoveg) {
  let szovegLista = szoveg.split("");
  let i = 0;
  let j = szovegLista.length - 1;
  while (i < j) {
    let csere = szovegLista[i];
    szovegLista[i] = szovegLista[j];
    szovegLista[j] = csere;
    ++i;
    --j;
  }
  return szovegLista.join("");
};

// Do not edit below this line
module.exports = reverseString;
