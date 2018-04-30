DROP DATABASE `burgers_db`;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers_db`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  `date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));




schema.sql. Write SQL queries this file that do the following:



Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:



id: an auto incrementing int that serves as the primary key.

burger_name: a string.

devoured: a boolean.





