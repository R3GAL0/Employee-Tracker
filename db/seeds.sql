INSERT INTO departments (names)
VALUES  ('finance'),
        ('sales'),
        ('human resources'),
        ('operations');

INSERT INTO roles (title, salary, department_id)
VALUES  ('finance manager', 100000, 1),
        ('finance worker', 60000, 1),
        ('sales manager', 100000, 2),
        ('sales worker', 60000, 2),
        ('human resources manager', 100000, 3),
        ('human resources', 60000, 3),
        ('operations manager', 100000, 4),
        ('operations worker', 60000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Saige', 'Fuentes', 1, NULL),
        ('Bowen', 'Higgens' ,2, 1),
        ('Leighton', 'Kramer' ,3, NULL),
        ('Kylan', 'Gentry' ,4, 3),
        ('Amelie', 'Griffith' ,5, NULL),
        ('Franklin', 'Sierra' ,6, 5),
        ('Marc', 'Avila' ,7, NULL),
        ('Jaylen', 'Blackwell' ,8, 7);