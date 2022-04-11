const Employee = require("../lib/Employee");

test("create test object", () => {
  const employee = new Employee("Tyler", 5, "tyler@test.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("employee name", () => {
  const employee = new Employee("Tyler", 5, "tyler@test.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("employee id", () => {
  const employee = new Employee("Tyler", 5, "tyler@test.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("employee email", () => {
  const employee = new Employee("Tyler", 5, "tyler@test.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("employee role", () => {
  const employee = new Employee("Tyler", 5, "tyler@test.com");

  expect(employee.getRole()).toEqual("Employee");
});
