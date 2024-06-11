const repeatString = function (szoveg, hanyszor) {
  if (hanyszor < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < hanyszor; ++i) {
    result += szoveg;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
