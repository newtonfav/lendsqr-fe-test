import isPassword from "@/src/app/utils/functions/validatePassword";

describe("Password Validation", () => {
  it("returns false for a string shorter than 8 characters", () => {
    expect(isPassword("jddjdd")).toBe(false);
    expect(isPassword("23jdd")).toBe(false);
    expect(isPassword("d$$jd")).toBe(false);
  });
});
