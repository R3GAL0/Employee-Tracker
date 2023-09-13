
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');;


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
        .then((data) => {
            if (data.choices == 'view all departments') {
                view_depts();
            } else if (data.choices == 'view all roles') {
                view_roles();
            } else if (data.choices == 'view all employees') {
                view_employ();
            }
        });
};



const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
);


function view_depts() {
    db.query('SELECT * FROM departments', (err, result) => {
        console.log(result);
    });
};

function view_roles() {
    db.query('SELECT * FROM roles', (err, result) => {
        console.log(result);
    });
};

function view_employ() {
    db.query('SELECT * FROM employees', (err, result) => {
        console.log(result);
    });
};