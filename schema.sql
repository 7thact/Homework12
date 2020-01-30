DROP DATABASE IF EXISTS management_db
CREATE DATABASE managment_db;

USE management_db;

CREATE TABLE emplyee
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	role_id int NOT NULL,
	manager_id int NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary decimal NOT NULL,
    department_id int
    PRIMARY KEY (id)
)

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);
