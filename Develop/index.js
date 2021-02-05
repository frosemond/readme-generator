// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(answersData =>{
            console.log(answersData);
        })
    
}

// Function call to initialize app
init();
