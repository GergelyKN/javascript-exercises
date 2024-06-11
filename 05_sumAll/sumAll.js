const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  let nagyobb = b;
  let kisebb = a;
  if (a > b) {
    nagyobb = a;
    kisebb = b;
  }

  let n = nagyobb - kisebb + 1;
  let sum = (n / 2) * (kisebb + nagyobb);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
