//Dependencies for index.js

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const genHTML = require('./src/genHTML.js');

// inquirer prompts for Manager: name, id#, email, office# - add validation for each input. 

//inquirer prompts for Engineer: name, id#, email, github username - add validation for each input.

//inquirer prompts for Intern: name, id#, email, school name - add validation for each input.

//once all information from prompts is gathered construct the class objects, put them through the genHTML(), then write the result to an HTML file. 

