const sum = require("./sum");

// 1. describe test 2. callback with logic

describe("example tests", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  it("null", () => {
    expect(null).toBeFalsy();
    expect(null).not.toBeTruthy();
    expect(null).toBeNull();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.29999);
  });
});

describe("strings", () => {
  it("checks for the inclusion of Josh Gumerove", () => {
    const value = "Josh Gumerove is so cool";
    expect(value).toMatch(/Josh Gumerove/);
  });
});
