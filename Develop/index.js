// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project: '
    },
    /* {
        type: 'input',
        name: 'description',
        message: 'Enter the description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions: ',
    }, */
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license if required',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    /* {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter the Github Username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address: ',
    }, */
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    readmeMarkdown = generateMarkdown(data);
    // console.log(readmeMarkdown);
    fs.writeFile(fileName, readmeMarkdown, err => {
        if (err){
            console.log(err);
            return;
        }
        console.log('Readme.md created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
        ===================================
        Create a New ReadMe file
        ===================================
    `);
    return inquirer.prompt(questions)
        .then(answersData =>{
            writeToFile('./dist/README.md', answersData);
        }).catch(err => {
            console.log(err);
        });
    
}

// Function call to initialize app
init();
