//Initialize requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//Function containing questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for this project. Enter None if there aren't any.",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Select a license",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "What ais your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test"
        },
    ]);

};

//Function to generate Markdown
const generateMarkdown = (response) => {

};

//Function that initializes the program
const init = async () => {

};

//Call the initialize function
init();