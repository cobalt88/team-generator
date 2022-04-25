//Dependencies for index.js

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const genHTML = require('./src/genHTML.js');

const output = [];

// inquirer prompts for Manager: name, id#, email, office# -. 

const managerQuestions = [
    {
      name: 'name',
      message: 'What is the name of the Team Manager?',
      type: 'input',
      
    },
    {
      name: 'id',
      message: "What is the Manager's ID Number?",
      type: 'input'
    },
    {
      name: 'email', 
      message: "What is the Manager's Email Address?",
      type: 'input'
    },
    {
      name: 'officeNumber',
      message: "What is the Manager's office number?",
      type: 'input'
    },
    {
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      type: 'confirm'
    }
  ];

//inquirer prompts for Engineer: name, id#, email, github username -

const engineerQuestions = [
    {
      name: 'name',
      message: "What is the Engineer's Name?",
      type: 'input'
    },
    {
      name: 'id',
      message: "What is the Engineer's ID Number?",
      type: 'input'
    },
    {
      name: 'email',
      message: "What is the Engineer's Email Address?",
      type: 'input'
    },
    {
      name: 'github',
      message: "What is the Engineer's GitHub Username?",
      type: 'input'
    },
    {
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      type: 'confirm'
    }
  ];


//inquirer prompts for Intern: name, id#, email, school name - 

const internQuestions = [
    {
      name: 'name',
      message: "What is the Intern's Name?",
      type: 'input'
    },
    {
      name: 'id',
      message: "What is the Intern's ID Number?",
      type: 'input'
    },
    {
      name: 'email',
      message: "What is the Intern's Email Address?",
      type: 'input'
    },
    {
      name: 'school',
      message: "What School did the Intern come from?",
      type: 'input'
    },
    {
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      type: 'confirm'
    }
  ];

const addEmployee = [
    {
      name: 'addEmployee',
      message: "Would you like to add a Manager, Engineer, or Intern.",
      type: 'list',
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ];

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

const complete = () => console.log(`you have reached the complete function, and here is the current output array${output}`); console.log(output);

const prompts = async () => {

  let employeeObj = {};

  const employee = await inquirer.prompt(addEmployee);

    switch(employee.addEmployee){

      case 'Manager':
        employeeObj = await inquirer.prompt(managerQuestions);
        output.push(employeeObj);
        if(employeeObj.addAnother){
          prompts();
        } else {
          complete();
        }
        break;
      
      case 'Engineer':
        employeeObj = await inquirer.prompt(engineerQuestions);
        output.push(employeeObj);
        if(employeeObj.addAnother){
          prompts();
        } else {
          complete();
        }
        break;
        
      case 'Intern':
        employeeObj = await inquirer.prompt(internQuestions);
        output.push(employeeObj);
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
    
  

  welcomePrompt();