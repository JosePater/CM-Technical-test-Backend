// Dependencias de MySQL
const mysql = require("mysql");

// Config conexión
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "root",
  port: 3306,
  database: "db_container_media"
});

// Conexión
conexion.connect((err) => {
  if (err) {
    console.log("Ha ocurrido un error: "+ err);
  } else {
    console.log("La Base de Datos se conectó exitosamente!!!");
  }
});

// Exportar de conexion
module.exports = conexion;
