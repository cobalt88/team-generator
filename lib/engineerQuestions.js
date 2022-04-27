//inquirer prompts for Engineer: name, id#, email, github username -
const inquirer = require('inquirer');
const engineerQuestions = () => inquirer.prompt([
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
]);


module.exports = engineerQuestions;

