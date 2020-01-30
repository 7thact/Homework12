# Homework12

Technologies Used:
- node.js
- inquirer.js
- MySQL
- console.table.js
_________________

REO:
> Inquirerjs NPM package and interaction via command-line
<> console.table NPM package
> separate file containing SQL queries -- constructor functions or class?
> SQL JOINS
<> seed.sql file
> what does a PRIMARY KEY value do?
    

Contain the following views:
department:
    id - INT PRIMARY KEY
    name - VARCHAR(30) to hold department name

role:
    id - INT PRIMARY KEY
    title -  VARCHAR(30) to hold role title
    salary -  DECIMAL to hold role salary
    department_id -  INT to hold reference to department role belongs to

employee:
    id - INT PRIMARY KEY
    first_name - VARCHAR(30) to hold employee first name
    last_name - VARCHAR(30) to hold employee last name
    role_id - INT to hold reference to role employee has
    manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

_____________________________

Directions:
Build a command-line application that at a minimum allows the user to:
    Add departments, roles, employees
    View departments, roles, employees
    Update employee roles

Here are some guidelines:
    Use the MySQL NPM package to connect to your MySQL database and perform queries.
    Use InquirerJs NPM package to interact with the user via the command-line.
    
    Use console.table to print MySQL rows to the console. There is a built-in version of console.table, but the NPM package formats the data a little better for our purposes.
    
    
    You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?
   

    You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.
    

Hints:
    You may wish to include a seed.sql file to pre-populate your database. This will make development of individual features much easier.

    Focus on getting the basic functionality completed before working on more advanced features.
