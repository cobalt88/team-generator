//engineer is employee plus guthub

const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor (employeeObj) {
        super (employeeObj);
        
        this.roll = 'Engineer';
        this.name = employeeObj.name;
        this.id = employeeObj.id;
        this.email = employeeObj.email;
        this.github = employeeObj.github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 