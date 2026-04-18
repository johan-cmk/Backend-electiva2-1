const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tienda"
});

db.connect((err) => {
  if (err) {
    console.log("❌ Error al conectar:", err.message);
  } else {
    console.log("✅ Base de datos conectada");
  }
});

module.exports = db;