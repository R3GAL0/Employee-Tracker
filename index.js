
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
        database: 'roster_db'
    },
    console.log(`Connected to the movies_db database.`)
);


function view_depts() {
    db.query('SELECT * FROM departments;', (err, result) => {
        console.log(result);
    });
};

function view_roles() {
    db.query('SELECT * FROM roles;', (err, result) => {
        console.log(result);
    });
};

function view_employ() {
    db.query('SELECT * FROM employees;', (err, result) => {
        console.log(result);
    });
};

// add dept/role/employee
// update an employee

function add_dept() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'answer',
                message: 'What is the name of the department you want to add?',
            }
        ])
        .then((data) => {
            db.query(`INSERT INTO departments (names) VALUES ('${data.answer}')`, (err, result) => {
                console.log(result);
            });

        });
};

function add_role() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the title of the role you want to add?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for that role (as a decimal)?',
            },
            {
                type: 'input',
                name: 'dept_id',
                message: 'What is the department id for that role (as an interger)?',
            }
        ])
        .then((data) => {
            // check if department id is valid

            db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${data.role}', '${data.salary}', '${data.department_id}')`, (err, result) => {
                console.log(result);
            });

        });
};
// change to employee
function add_employee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first',
                message: 'What is the first name of the employee?',
            },
            {
                type: 'input',
                name: 'last',
                message: 'What is the last name of the employee?',
            },
            {
                type: 'input',
                name: 'role',
                message: 'What is the role id for the employee (as an interger)?',
            },
            {
                type: 'input',
                name: 'manager',
                message: 'What is the manager id for that role (null if it is a manager)?',
            }
        ])
        .then((data) => {
            // check if inputed data is valid
            db.query(`INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES ('${data.first}', '${data.last}', '${data.role}', '${data.manager}')`, (err, result) => {
                console.log(result);
            });

        });
};

// need to put salaries as decimals