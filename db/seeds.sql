INSERT INTO departments (names)
VALUES  ('finance'),
        ('sales'),
        ('human resources'),
        ('operations');

INSERT INTO roles (title, salary, department_id)
VALUES  ('finance manager', '100k', 1),
        ('finance worker', '60k', 1),
        ('sales manager', '100k', 2),
        ('sales worker', '60k', 2),
        ('human resources manager', '100k', 3),
        ('human resources', '60k', 3),
        ('operations manager', '100k', 4),
        ('operations worker', '60k', 4),;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Saige', 'Fuentes', '1', '1'),
        ('Bowen', 'Higgens' ,'2', '1'),
        ('Leighton', 'Kramer' ,'3', '3'),
        ('Kylan', 'Gentry' ,'4', '3'),
        ('Amelie', 'Griffith' ,'5', '5'),
        ('Franklin', 'Sierra' ,'6', '5'),
        ('Marc', 'Avila' ,'7', '7'),
        ('Jaylen', 'Blackwell' ,'8', '7');