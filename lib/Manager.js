// team manager gets name, email, id#, and office number. (employee plus office number)

const Employee = require('../lib/Employee');

class Manager extends Employee {
  constructor (employeeObj) {
    super (employeeObj);
    
    this.roll = 'Manager';
    this.name = employeeObj.name;
    this.id = employeeObj.id;
    this.email = employeeObj.email;
    this.officeNumber = employeeObj.officeNumber;

  }

  getOfficeNumber () {
    return this.officeNumber;
  }

  getRoll () {
    return "Manager";
  }
}

module.exports = Manager;
