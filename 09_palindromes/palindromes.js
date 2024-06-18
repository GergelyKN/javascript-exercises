const palindromes = function (word) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const word1 = word
    .toLowerCase()
    .split("")
    .filter((x) => validCharacters.includes(x))
    .join("");

  const word2 = word1.split("").reverse().join("");
  return word1 === word2;
};

palindromes("fasz");
// Do not edit below this line
module.exports = palindromes;
