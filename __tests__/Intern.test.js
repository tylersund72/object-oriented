const Intern = require("../lib/Intern");

test("intern object", () => {
  const intern = new Intern("Tyler", 1, "test@gmail", "school");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets intern school", () => {
  const intern = new Intern("Tyler", 1, "test@gmail", "school");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets intern role", () => {
  const intern = new Intern("Tyler", 1, "test@gmail", "school");

  expect(intern.getRole()).toEqual("Intern");
});
