DROP DATABASE IF EXISTS gylp6x5fa0464z6s;

CREATE DATABASE gylp6x5fa0464z6s;

USE gylp6x5fa0464z6s;
CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOL NOT NULL
);