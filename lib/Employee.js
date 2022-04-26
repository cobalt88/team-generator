// employee has common traits of all 3 other classes, name, id#, and email.

class Employee {
    constructor ({employeeObj}) {
      this.name = employeeObj.name;
      this.id = employeeObj.id;
      this.email = employeeObj.email
      
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }

  }
  
  module.exports = Employee
