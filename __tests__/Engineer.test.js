const { TestWatcher } = require("jest");
const Engineer = require("../lib/Engineer");

test("engineer object", () => {
  const engineer = new Engineer("Tyler", 5, "tyler@test.com", "test");

  expect(engineer.github).toEqual(expect.any(String));
});

test("engineer github", () => {
  const engineer = new Engineer("Tyler", 5, "tyler@test.com", "test");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("engineer role", () => {
  const engineer = new Engineer("Tyler", 5, "tyler@test.com", "test");

  expect(engineer.getRole()).toEqual("Engineer");
});
