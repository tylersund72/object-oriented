const Manager = require("../lib/Manager");

test("manager object", () => {
  const manager = new Manager("Tyler", 5, "test@gmail.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("manager role", () => {
  const manager = new Manager("Tyler", 5, "test@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
