CREATE DATABASE photolib;
use photolib;

CREATE TABLE photos (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  photo varchar(200),
  link varchar(200),
  PRIMARY KEY (ID)
);