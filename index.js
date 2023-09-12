
const fs = require('fs');
const inquirer = require('inquirer');


start();
function start() {
    inquirer
        .prompt([
            {
              type: 'list',
              name: 'license',
              message: 'What kind of license should your project have?',
              choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
            }
        ])
        .then();
    };