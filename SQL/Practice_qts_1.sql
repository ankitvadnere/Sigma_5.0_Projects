CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE teacher (
	id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(20),
    salary INT
);

INSERT INTO teacher (id, name, subject, salary) VALUES 
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 50000);

SELECT * FROM teacher;

UPDATE teacher
SET salary = 75000
WHERE id = 9;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT; 

UPDATE teacher 
SET ctc = ctc + (ctc * 0.25);

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(20) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;