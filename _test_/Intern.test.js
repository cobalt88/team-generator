//intern test needs to add test for school on top of normal employee test
//intern test needs to test for office number on top of normal employee test
const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Intern =  require("../lib/Intern");

test('creates intern class', () => {
  const intern = new Intern({name: 'Sallie Stitch', id: 9874, email: 'sallie.stitch@bobsburers.com', school: 'UCF'});

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
})