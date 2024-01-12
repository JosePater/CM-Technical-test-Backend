
# Back-end [Node.js]

## Ejecución:
- La ejecución del npm/nodemon esta configurada así:
```
npm run n
```


## Conexión con la base de datos local:


```javascript
[conexion.js];
const mysql = require("mysql");

// Config conexión
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // colocar password de la DB local
  port: 3306,
  database: "db_container_media"
});
```

## Conexión Exitosa:
```
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node /index.js index.js`
Se ha conectado el servidor en el puerto: 3500
La Base de Datos se conectó exitosamente!!!
```

