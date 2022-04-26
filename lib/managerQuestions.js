// inquirer prompts for Manager: name, id#, email, office# -. 

const inquirer = require('inquirer');


const managerQuestions = () => inquirer.prompt([
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
]);


module.exports = managerQuestions;