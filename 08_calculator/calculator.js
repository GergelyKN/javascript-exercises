const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (lista) {
  const eredmeny = lista.reduce((kezdo, lepes) => {
    return kezdo + lepes;
  }, 0);
  return eredmeny;
};

const multiply = function (lista) {
  const eredmeny = lista.reduce((kezdo, szorzat) => {
    return kezdo * szorzat;
  }, 1);
  return eredmeny;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
