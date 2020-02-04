
INSERT INTO department (name) VALUES ('Accounting');
INSERT INTO department (name) VALUES ('Business Development');
INSERT INTO department (name) VALUES ('Collections');
INSERT INTO department (name) VALUES ('Compliance');

INSERT INTO role (title, salary, department_id) VALUES ('Lead Accountant', 70000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 80000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Collections Specialist', 50000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Head Legal Council', 120000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Charles', 'Cressey', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('William', 'Smith', 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('George', 'Adams', 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Allie', 'Cornwall', 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Karen', 'Wantmanager', 3, 1);
