DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;
USE management_db;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(30)
);


CREATE TABLE role
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary decimal,
    department_id int
);


CREATE TABLE employee
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	role_id int,
	manager_id int
)

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;