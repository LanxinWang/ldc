const loadLdcDigits = require("../src/ldcDigits");

describe("load ldc digits", () => {
  it("should get number and Corresponding ldc digits ", () => {
    const ldcDigits = [
      ["._.", "|.|", "|_|"],
      ["...", "..|", "..|"],
      ["._.", "._|", "|_."],
      ["._.", "._|", "._|"],
      ["...", "|_|", "..|"],
      ["._.", "|_.", "._|"],
      ["._.", "|_.", "|_|"],
      ["._.", "..|", "..|"],
      ["._.", "|_|", "|_|"],
      ["._.", "|_|", "..|"],
    ];
    const result = loadLdcDigits();
    for (let num = 0; num <= 9; num++) {
      expect(result.get(num.toString())).toEqual(ldcDigits[num]);
    }
  });
});
