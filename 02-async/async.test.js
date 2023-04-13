const fetchData = require("./async");

it("should return the correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
