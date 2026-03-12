const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usuarioRoutes = require("./src/routes/usuarios.routes");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas de la API
app.use("/api", usuarioRoutes);

// conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado 🚀");
})
.catch((error) => {
    console.log("Error de conexión:", error);
});

// ruta de prueba
app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});