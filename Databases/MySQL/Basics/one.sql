-- Active: 1715839483511@@127.0.0.1@3306@Programming
CREATE DATABASE Programming; -- this is a basic DDL command to create a database

USE Programming; -- this is a basic DML command that is used to use a DATABASE

CREATE TABLE Programming_Languages
(
    Name VARCHAR(10),
    Year INT
); -- this creates a new table with the specified attributes

DESC Programming_Languages; -- a basic DDL command to show the description of a table

ALTER TABLE Programming_Languages ADD Demo VARCHAR(20); -- Alter is a basic DDL command to modify the structure of the database, it will add a new column 

DESC Programming_Languages;

ALTER TABLE Programming_Languages DROP COLUMN Demo; -- this will delete the column demo

ALTER TABLE Programming_Languages ADD Demo1 VARCHAR(20) PRIMARY KEY, ADD Demo2 Int UNIQUE; -- we can include multiple columns like this

ALTER TABLE Programming_Languages DROP COLUMN Demo1, DROP COLUMN Demo2;
DESC Programming_Languages;

ALTER TABLE Programming_Languages MODIFY COLUMN Name VARCHAR(20); -- this will modify the properties of existing columns

ALTER TABLE Programming_Languages RENAME COLUMN Name TO NAME, RENAME COLUMN Year TO YEAR; -- this will rename the column names
ALTER TABLE Programming_Languages RENAME TO PL; -- this can also rename a table name

DESC PL;

ALTER TABLE PL RENAME COLUMN NAME TO Name;
ALTER TABLE PL RENAME TO Programming_Languages, RENAME COLUMN YEAR TO Year;

DESC Programming_Languages;

ALTER TABLE Programming_Languages ADD CONSTRAINT unique_id PRIMARY KEY (Year), ADD CONSTRAINT unique_Name UNIQUE (Name);
ALTER TABLE Programming_Languages DROP CONSTRAINT unique_Name;
ALTER TABLE Programming_Languages DROP PRIMARY KEY;

DESC Programming_Languages;

ALTER TABLE Programming_Languages ADD COLUMN Purpose VARCHAR(30);

INSERT INTO Programming_Languages (Name, Year) VALUES ("JavaScript", 1995), ("Java", 1995), ("Python", 1991); -- basic DML command to insert rows into a table 

SELECT * FROM Programming_Languages -- basic dcl command to select specific rows of a table, * means everything

UPDATE Programming_Languages SET Purpose = "Machine Learning" WHERE Name = "Python"; -- this is a basic DML command to update the value of a tuple, SET is a DML command to set the new value of a column and WHERE is a DML command to include a condition
UPDATE Programming_Languages SET Purpose = "Web App Develoment" WHERE Name = "JavaScript";


SELECT Name FROM Programming_Languages WHERE Year = 1991; 

Use Programming;