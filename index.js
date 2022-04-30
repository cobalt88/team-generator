//Dependencies for index.js
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generateHTML.js');
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
const complete = () => generateHTML(output);

//function to display the various questions for each type of employee
const prompts = async () => {
  let employeeObj = {};
  const employee = await inquirer.prompt(addEmployee);

    switch(employee.addEmployee){

      case 'Manager':
       employeeObj = await managerQuestions();
      const manager = new Manager(employeeObj);
        output.push(manager);
        if(employeeObj.addAnother){
          return prompts();
        } else {
          complete();
        }
        break;

      case 'Engineer':
       employeeObj = await engineerQuestions();
        const engineer = new Engineer(employeeObj)
        output.push(engineer)
        if(employeeObj.addAnother){
          return prompts();
        } else {
          complete();
        }
        break;

      case 'Intern':
        employeeObj = await internQuestions();
        const intern = new Intern(employeeObj)
        output.push(intern)
        if(employeeObj.addAnother){
          return prompts();
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