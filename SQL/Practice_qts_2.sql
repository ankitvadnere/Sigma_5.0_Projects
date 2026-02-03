USE college;

CREATE TABLE student_info (
	rollNo INT PRIMARY KEY,
    name VARCHAR(30),
    city VARCHAR(30),
    marks INT
);

INSERT INTO student_info (rollNo, name, city, marks) 
VALUES
(1, "Ankit", "Mumbai", 99),
(2, "Amogh", "Pune", 78),
(3, "Abhiram", "Mumbai", 45),
(4, "Ram", "Nagpur", 65);

SELECT * FROM student_info;

SELECT * FROM student_info
WHERE marks > 75;

SELECT city FROM student_info
GROUP BY city;

SELECT MAX(marks) FROM student_info
GROUP BY city;

SELECT AVG(marks) FROM student_info AS Average_Marks;

ALTER TABLE student_info 
ADD COLUMN grade VARCHAR(1);

UPDATE student_info 
SET grade = "O"
WHERE marks >= 80;

UPDATE student_info 
SET grade = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE student_info 
SET grade = "B"
WHERE marks >= 60 AND marks < 70;

UPDATE student_info
SET grade = "F"
WHERE marks < 60;