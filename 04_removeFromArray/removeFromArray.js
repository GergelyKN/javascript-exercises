const removeFromArray = function (lista, ...args) {
  const argss = Array.from(arguments);
  for (let i = 1; i < argss.length; ++i) {
    for (let j = 0; j < argss[0].length; j++) {
      const index = argss[0].indexOf(argss[i]);
      if (index > -1) {
        lista.splice(index, 1);
      }
    }
  }
  return lista;
};
console.log(removeFromArray([1, 2, 2, 3], 2));
// Do not edit below this line
module.exports = removeFromArray;
