import isEmail from "@/src/app/utils/functions/validateEmail";

describe("Email Validation", () => {
  it("Returns false for an invalid email", () => {
    expect(isEmail("favouroghenekowho")).toBe(false);
    expect(isEmail("favouroghenekowho@")).toBe(false);
    expect(isEmail("favour@oghenekowho")).toBe(false);
  });
});
