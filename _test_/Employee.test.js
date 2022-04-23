//standard employee test needs to check for name, id, and email. 

const Employee = require('../lib/Employee');

test('is employee', () => {
  const employee = new Employee(name, id, email);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
