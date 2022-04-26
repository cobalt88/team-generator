//inquirer prompts for Intern: name, id#, email, school name - 

const inquirer = require('inquirer');


const internQuestions = () => inquirer.prompt([
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
]);

module.exports = internQuestions