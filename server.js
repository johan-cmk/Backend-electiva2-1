const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const rutas = require("./routes/productoRoutes");

app.use("/api", rutas);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});