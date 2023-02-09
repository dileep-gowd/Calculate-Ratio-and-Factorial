const fact = require("../factorial/index");
const rat = require("../ratio/index");

const ratioAndFactorial = function (num1, num2, num3) {
  return { ratio: rat(num1, num2), factorial: fact(num3) };
};

module.exports = ratioAndFactorial;
