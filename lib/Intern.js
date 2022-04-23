// intern has name, id#, email, and school

const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);

    this.school = school
  }

  getSchool () {
    return this.school
  }

  getRoll () {
    return 'Intern';
  }
}

module.exports = Intern;
