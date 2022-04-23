//Dependencies for index.js

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const genHTML = require('./src/genHTML.js');

// inquirer prompts for Manager: name, id#, email, office# -. 

const addManager = () => {
  return inquirer.prompt ([
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
    }
  ]);
}

//inquirer prompts for Engineer: name, id#, email, github username -

const addEngineer = () => {
  return inquirer.prompt([
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
    }
  ]);
}

//inquirer prompts for Intern: name, id#, email, school name - 

const intern = () => {
  return inquirer.prompt([
    {
      name: 'name',
      message: "What is the Intern's Name?",
      type: 'input'
    },
    {
      name: 'id',
      message: "What is the Inter's ID Number?",
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
    }
  ])
}

const welcome = () => {
  inquirer.prompt([
    {
      name: 'welcome',
      message: 'Welcome to Team Generator! Would you like to start a new team or add an employee to an existing team?',
      type: 'list'
    }
  ])
}

const addEmployee = () => {
  return inquirer.prompt([
    {
      name: 'addEmployee',
      message: "Would you li"
    }
  ])
}

// initial prompts with options to add Manager, Engineer, or Intern. After each function completes return to this prompt with "would you like to add another?" followed by a list of options.
// if Engineer is selected, execute addEngineer function, If intern ... and if Manager ... 

//once all information from prompts is gathered construct the class objects, put them through the genHTML(), then write the result to an HTML file. 

 