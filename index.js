//Dependencies for index.js
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const genHTML = require('./src/genHTML.js');
const managerQuestions = require('./lib/managerQuestions');
const engineerQuestions = require('./lib/engineerQuestions');
const internQuestions = require('./lib/internQuestions')

//other global variables
const output = [];

//first prompt to display in the command line
const welcomePrompt = async () => {
  welcome = await inquirer.prompt([
    {
      name: 'welcome',
      message: 'Welcome to Team Generator! A simple easy way to keep track of your team members. Whenever you are ready to input your team members information select yes to continue,',
      type: 'confirm',
    }
  ])
  if(welcome){
    prompts();
  }
}

//add new employee prompt, this comes up directly after welcome if confirm = yes 
const addEmployee = [
  {
    name: 'addEmployee',
    message: "Would you like to add a Manager, Engineer, or Intern.",
    type: 'list',
    choices: ['Manager', 'Engineer', 'Intern']
  }
];

//placeholder function to test current function outputs. 
const complete = () => console.log(output);

//function to display the various questions fir each type of employee
const prompts = async () => {



  const employee = await inquirer.prompt(addEmployee);

    switch(employee.addEmployee){

      case 'Manager':
       let employeeObj = await managerQuestions();
       console.log(employeeObj)
      const manager = new Manager(employeeObj);
        output.push(manager);

        if(employeeObj.addAnother){
          prompts();
        } else {
          complete();
        }
        break;
    
      case 'Engineer':
       employeeObj = await engineerQuestions();
        const engineer = new Engineer(employeeObj)
        if(employeeObj.addAnother){
          prompts();
        } else {
          complete();
        }
        break;
        
      case 'Intern':
        employeeObj = await internQuestions();
        const intern = new Intern(employeeObj)
        if(employeeObj.addAnother){
          prompts();
        } else {
          complete();
        }
        break;

      default:
        console.log('you have reached the default switch statement. thant should not happen. Please try again!');
      }
  }

// starts the application.
welcomePrompt();