// Including the inquirer package needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const { writeFile } = require('fs').promises;

// Creating an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            validate: (value) => { if (value) { return true } else { return 'Please enter a title to continue' } }
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'Please enter a description to continue' } }
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
            type: 'input',
            message: 'Any credits?',
            name: 'credits',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'GMU', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'Please choose a value to continue' } }
        },
        {
            type: 'input',
            message: 'How come others contribute to your application?',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value or write N/A to continue' } }
        },
        {
            type: 'input',
            message: 'Any test instructions?',
            name: 'tests',
            validate: (value) => { if (value) { return true } else { return 'Please enter a value to continue' } }
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'GitHub',
            validate: (value) => { if (value) { return true } else { return 'Please enter a valid GitHub to continue' } }
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'Please enter a valid email address to continue' } }
        },
        {
            type: 'input',
            message: 'What is your LinkedIn?',
            name: 'LinkedIn',
            validate: (value) => { if (value) { return true } else { return 'Please enter your LinkedIn to continue' } }
        },
        {
            type: 'list',
            message: 'How do you prefer to be contacted?',
            name: 'questions',
            choices: ['email', 'GitHub', 'LinkedIn'],
            validate: (value) => { if (value) { return true } else { return 'Please choose a value to continue' } }
        },
    ]);
};



// Creating a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();