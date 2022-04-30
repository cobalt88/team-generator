// intern has name, id#, email, and school (employee plus school)

const Employee = require("../lib/Employee.js");

class Intern extends Employee {
  constructor (employeeObj) {
    super (employeeObj);
    
    this.roll = 'Intern';
    this.name = employeeObj.name;
    this.id = employeeObj.id;
    this.email = employeeObj.email;
    this.school = employeeObj.school
  }

  getSchool () {
    return this.school
  }

  getRoll () {
    return 'Intern';
  }
}

module.exports = Intern;
