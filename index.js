// Acceso a la conexión MySQL
require("./DB/conexion");

// Llamado a la dependencia express
const express = require("express");

// Puerto de ejecución del servidor
const port = 3500; //process.env.port

// Instancia de Express
const app = express();

// Admitir datos tipo JSON
app.use(express.json());

// Configuración del puerto
app.set("port", port);

// Routes
app.use("/api", require("./routes"));

// Iniciar Express
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("Error al iniciar el servidor...");
  } else {
    console.log("Se ha conectado el servidor en el puerto: " + port);
  }
});
