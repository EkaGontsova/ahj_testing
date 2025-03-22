import { cardValidation } from "../cardValidation";

describe("cardValidation", () => {
  test("should return Visa for valid Visa card numbers", () => {
    expect(cardValidation("4111111111111")).toBe("Visa");
    expect(cardValidation("4111111111111111")).toBe("Visa");
    expect(cardValidation("4111111111111111111")).toBe("Visa");
  });

  test("should return MasterCard for valid MasterCard numbers", () => {
    expect(cardValidation("5111111111111111")).toBe("MasterCard");
    expect(cardValidation("5212345678901234")).toBe("MasterCard");
  });

  test("should return MIR for valid MIR card numbers", () => {
    expect(cardValidation("2200123456789012")).toBe("MIR");
    expect(cardValidation("2204123456789012")).toBe("MIR");
  });

  test("should return AmericanExpress for valid American Express numbers", () => {
    expect(cardValidation("341111111111111")).toBe("AmericanExpress");
    expect(cardValidation("371111111111111")).toBe("AmericanExpress");
  });

  test("should return UnionPay for valid UnionPay card numbers", () => {
    expect(cardValidation("6212345678901234")).toBe("UnionPay");
    expect(cardValidation("6223456789012345678")).toBe("UnionPay");
  });

  test("should return an empty string for invalid card numbers", () => {
    expect(cardValidation("1234567890123456")).toBe("");
    expect(cardValidation("")).toBe("");
    expect(cardValidation("abcdefg")).toBe("");
  });

  test("should return an empty string for card numbers with incorrect lengths", () => {
    expect(cardValidation("4111")).toBe("");
    expect(cardValidation("51111111111111111")).toBe("");
  });
});
