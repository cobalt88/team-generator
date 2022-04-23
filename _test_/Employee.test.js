const Employee = require('../lib/Employee');

test('is employee', () => {
  const employee = new Employee(name, id, email);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee,id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('has name', () => {
  const employee = new Employee(name, id, email);

  expect(employee.getName()).toEqual(expect.any(String));
});

test('employee id', () => {
  const employee = new Employee(name, id, email);

  expect(employee.getEmail()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee(name, id, email);

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
  const employee = new Employee(name, 90, email);

  expect(employee.getRole()).toEqual("Employee");
});