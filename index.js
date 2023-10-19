// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();


const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your project table of contents?',
            name: 'table',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'Any installation?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'Any usage information?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GMU License', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'Please choose a value to continue' } }
        },
        {
            type: 'input',
            message: 'Any contribution or credits to list?',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'Any test instructions?',
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'GitHub',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your LinkedIn?',
            name: 'LinkedIn',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'checkbox',
            message: 'How do you prefer to be contacted?',
            name: 'contact',
            choices: ['email', 'GitHub', 'LinkedIn'],
            validate: (value) => { if (value) { return true } else { return 'Please pick a value to continue' } }
        },
    ]);
};

const generateReadme = ({
    title,
    description,
    table,
    installation,
    usage,
    license,
    contribution,
    instructions,
    GitHub,
    email,
    LinkedIn,
    contact
}) => `# ${title}

## Description
${description}

## Table of Content
${table}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contribution 
${contribution}

## Instructions
${instructions}

## Contact
* GitHub: ${GitHub}
* Email: ${email}
* LinkedIn: ${LinkedIn}`;

Const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();