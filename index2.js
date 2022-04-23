//Dependencies for index.js

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const genHTML = require('./src/genHTML.js');

const output = [];
const teams = [];

// inquirer prompts for Manager: name, id#, email, office# -. 

const addManager = () => {
  inquirer.prompt([
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
  ])
  .then((answers) => {
    if(answers.addAnother){
      addEmployee();
    }
  })
}


//inquirer prompts for Engineer: name, id#, email, github username -

const addEngineer = [
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

const intern = [
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
    },
    {
      name: 'addAnother',
      message: 'Would you like to add another employee?',
      type: 'confirm'
    }
  ];


const welcome = [
    {
      name: 'welcome',
      message: 'Welcome to Team Generator! Would you like to start a new team or add an employee to an existing team?',
      type: 'list',
      options: ['Start a new team', 'Add to an existing team']
      
    }
  ];


const addEmployee = [
    {
      name: 'addEmployee',
      message: "Would you like to add a Manager, Engineer, or Intern.",
      type: 'list',
      options: ['Manager', 'Engineer', 'Intern']
    }
  ];