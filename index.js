//Initialize requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Function containing questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions for this project. Enter None if there aren't any."
        },
        {
            type: "input",
            name: "usage",
            message: "How would you like your application to be used?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "test",
            message: "What are the test instructions?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select a license",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
    ]);

};

//Function to generate Markdown
const generateMarkdown = (response) => {
    return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

    ${response.description}
## Installation:
    ${response.installation}
## Usage:
    ${response.usage}
## Contribution:
    ${response.contribution} 
## Test:
    ${response.test}   
## License:
    For more information about the license, click on the link below.

-  [License](https://opensource.org/licenses/${response.license})

## Questions:
    To see more of my work on GitHub you can go to my GitHub page with the following link:

-  [GitHub Profile](https://github.com/${response.username})

For any questions please feel free to email me: ${response.email}.
`;

}

//Function that initializes the program
const init = async () => {

    const response = await promptUser();

};

//Call the initialize function
init();