let animals = ["elephant", "zebra", "bear", "tiger"];

// afterEach(() => {
//     animals = ["elephant", "zebra", "bear", "tiger"];
//   });

describe("animals array", () => {
  beforeEach(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
  });

  it("should add animal to end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have an initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("tests for truth value", () => {
  it("expects true to be truthy", () => {
    expect(true).toBeTruthy();
  });
});
