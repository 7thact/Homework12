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
    };

    const addEmployee = () => {
        inquirer.prompt([
            {
                name: "first",
                type: "input",
                message: "Employee's first name?"
            },
            {
                name: "last",
                type: "input",
                message: "Employee's last name?"
            },
            {
                name: "choice",
                type: "list",
                message:"Employee's title?",
                choices:[
                    "President",
                    "Vice President",
                    "CFO",
                    "Sales Associate",
                    "Accounting Specialist",
                    "Attorney",
                    "Collections Specialist"
                ]
            }
        ]).then(data => {
            switch (data.choice) {
                case "President":
                    var roleId = 5;
                    break;
                case "Vice President":
                    var roleId = 6;
                    break;
                case "CFO":
                    var roleId = 7;
                    break;
                case "Sales Associate":
                    var roleId = 2;
                case "Accounting Specialist":
                    var roleId = 1;
                    break;
                case "Attorney":
                    var roleId = 4;
                    break;
                case "Collections Specialist":
                    var roleId = 3;
                    break;
            }
            const query = "INSERT INTO employee SET ?;"
            connection.query(
                query,
                {
                    first_name: data.first,
                    last_name: data.last,
                    role_id: roleId
                },
                (err) => {
                    if (err) throw err;
                    console.log("Thanks for adding a new employee.")
                });
        });
    };

    
