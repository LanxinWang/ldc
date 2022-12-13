const loadLdcDigits = require("./ldcDigits");

const ldcDigits = loadLdcDigits();

const getLdcDigits = (numbers) => {
  const numberToLdcDigits = numbers
    .toString()
    .split("")
    .map((number) => ldcDigits.get(number));
  return ldcDigitsFormat(numberToLdcDigits);
};

const ldcDigitsFormat = (numberToLdcDigits) => {
  const DigitsLines = [0, 1, 2].map((line) =>
    numberToLdcDigits
      .map((numberToLdcDigit) => numberToLdcDigit[line])
      .join(" ")
  );
  return `${DigitsLines[0]}\n${DigitsLines[1]}\n${DigitsLines[2]}`;
};

module.exports = getLdcDigits;
