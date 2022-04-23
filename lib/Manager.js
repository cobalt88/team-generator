// team manager gets name, email, id#, and office number. (employee plus office number)

const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super (name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber () {
    return this.officeNumber;
  }

  getRoll () {
    return "Manager";
  }
}

module.exports = Manager;