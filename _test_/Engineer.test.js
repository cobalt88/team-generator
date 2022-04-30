// engineer needs to test for the addition of github on top of the regular employee test
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Engineer =  require("../lib/Engineer");

test('creates engineer class', () => {
  const engineer = new Engineer({name: "Jack O'Lantern", id: 4567, email: 'jack.Olantern@bobsburers.com', github: "jackolantern"});

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
})
