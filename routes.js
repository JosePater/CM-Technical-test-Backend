const router = require("express").Router();
const conexion = require("./DB/conexion");
const users_table = "users";

// ________________ Asignación de rutas ________________

// Seleccionar todas las tablas de users
router.get("/users/all", (req, res) => {
  let sql = "SELECT * FROM " + users_table;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

// Seleccionar un usuario de la tabla user
router.get("/users/:id", (req, res) => {
  const { id } = req.params; // Se obtiene del parámetro de entrada
  let sql = "SELECT * FROM " + users_table + " WHERE _id = ?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

// Agregar usuarios
router.post("/users/add", (req, res) => {
  const { name, last_name, pass, _date } = req.body;

  let sql = `INSERT INTO ${users_table} VALUES ('${0}','${name}','${last_name}','${pass}','${_date}')`;

  conexion.query(sql, (err, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Usuario agregado!!!" });
    }
  });
});

// Actualizar usuario
router.put("/users/update/:id", (req, res) => {
  const { id } = req.params; // Se obtiene el dato de entrada
  const { name, last_name, pass, _date } = req.body; // Recuperar datos

  let sql = `UPDATE ${users_table} SET
      name = '${name}',
      last_name = '${last_name}',
      password = '${pass}',
      _date = '${_date}'
      WHERE _id = '${id}'`;

  conexion.query(sql, (err, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Usuario Actualizado!!!" });
    }
  });
});

// Eliminar usuario
router.delete("/users/delete/:id", (req, res) => {
  const { id } = req.params; // Se obtiene del parámetro de entrada

  let sql = `DELETE FROM ${users_table} WHERE _id = ${id}`;

  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Usuario Eliminado!" });
    }
  });
});



// Exportar routes
module.exports = router;
