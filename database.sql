CREATE DATABASE user ;

CREATE TABLE userData(
userId SERIAL PRIMARY KEY,
name varchar(255),
Lname varchar(255),
age int,
password varchar(255),
email varchar(255),
)
