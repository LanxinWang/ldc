const getLdcDigits = require("../src/index");

describe("getLdcDigits", () => {
  it("should get correct ldc digits number when input 1 number ", () => {
    const expectLdcDigits = [
      `._.\n|.|\n|_|`,
      `...\n..|\n..|`,
      `._.\n._|\n|_.`,
      `._.\n._|\n._|`,
      `...\n|_|\n..|`,
      `._.\n|_.\n._|`,
      `._.\n|_.\n|_|`,
      `._.\n..|\n..|`,
      `._.\n|_|\n|_|`,
      `._.\n|_|\n..|`,
    ];

    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((inputNumber) => {
      const result = getLdcDigits(inputNumber);
      expect(result).toBe(expectLdcDigits[inputNumber]);
    });
  });

  it("should get correct ldc digits number when input 2 numbers ", () => {
    const inputNumber = 12;
    const expectLdcDigits = `... ._.\n..| ._|\n..| |_.`;

    const result = getLdcDigits(inputNumber);

    expect(result).toBe(expectLdcDigits);
  });

  it("should get correct ldc digits number when input 3 numbers ", () => {
    const inputNumber = 123;
    const expectLdcDigits = `... ._. ._.\n..| ._| ._|\n..| |_. ._|`;

    const result = getLdcDigits(inputNumber);

    expect(result).toBe(expectLdcDigits);
  });
});
