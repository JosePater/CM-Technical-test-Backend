-- Se crea la base de datos para users y logs
CREATE DATABASE IF NOT EXISTS db_container_media;

-- DROP DATABASE container_media;

-- Usar la db creada
USE db_container_media;

-- Se crea la tabla users
CREATE TABLE users (
  _id INT AUTO_INCREMENT,
  name VARCHAR(50),
  last_name VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  _date DATE NOT NULL,
  PRIMARY KEY(_id)
);

-- Se crea la table logs
CREATE TABLE logs (
  _id INT AUTO_INCREMENT,
  users_id INT NOT NULL,
  _date DATETIME NOT NULL,
  PRIMARY KEY(_id)
);

-- ________________________________________
-- Ver tablas
SELECT * FROM users_prueba;
-- DELETE
DELETE FROM users_prueba WHERE _id = 2;
-- DROP
DROP TABLE users_prueba;


-- ________________________________________
-- Prueba
CREATE TABLE users_prueba (
  _id INT AUTO_INCREMENT,
  name VARCHAR(50),
  last_name VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  _date DATE NOT NULL,
  PRIMARY KEY(_id)
);

-- INSERTAR ELEMENTOS
INSERT INTO users
VALUES (0, "José", "Paternina", "123","1993-09-30");