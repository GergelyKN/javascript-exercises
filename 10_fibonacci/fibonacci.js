const fibonacci = function (number) {
  number = parseInt(number);
  if (number === 0) {
    return 0;
  }
  if (number < 0) {
    return "OOPS";
  }

  let first = 0;
  let second = 1;
  let temp;
  for (let i = 2; i <= number; i++) {
    temp = first + second;
    first = second;
    second = temp;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
