var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Denveru37!",
    database: "management_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Exit"
            ]

        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Departments":
                    viewDepartment();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "View All Employees":
                    viewEmployees();
                    break;

                case "Add a Department":
                    addDepartment();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "Add an Employee":
                    addEmployee();
                    break;

                case "Update an Employee Role":
                    updateEmployee();
                    break;
                default:
                    connection.end();
            }
        });
}

const viewDepartment = () => {
    const query = "SELECT * FROM department;"
    connection.query(
        query
        , (err, res) => {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        name: "choice",
                        type: "list",
                        message: "Which Department would you like to view?",
                        choices: () => {
                            var selections = [];
                            for (const item of res) {
                                selections.push(item.name)
                            }
                            return selections;
                        }
                    }
                ]).then(data => {
                    const query = "Select employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE ?;"
                    connection.query(
                        query
                        , [{
                            "department.name": data.choice
                        }]
                        , (err, res) => {
                            if (err) throw err;
                            console.table(res)
                        }
                    )
                })
        },

        function viewDept() {
            var dept = "SELECT * FROM department";
            connection.query(dept, function (err, results) {
                if (err) throw err;

                return results;
            });

        }
    )}

    const viewEmployees = () => {
        const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;"
        connection.query(
            query,
            (err, res) => {
                if (err) throw err;
                console.table(res);
            });
    };

    const viewRoles = () => {
        const query = "SELECT * FROM role;"
        connection.query(
            query,
            (err, res) => {
                if (err) throw err;
                inquirer.prompt([{
                    name: "choice",
                    type: "list",
                    message: "Which role would you like to see?",
                    choices: () => {
                        var selections = [];
                        for (const item of res) {
                            selections.push(item.title)
                        }
                        return selections;
                    }
                }]).then(data => {
                    const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title , department.name, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE ?;"
                    connection.query(
                        query,
                        [{
                            "role.title": data.choice
                        }]
                        , (err, res) => {
                            if (err) throw err;
                            console.table(res);
                        });
                });
            });
    }
