const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usuarioRoutes = require("./src/routes/usuarios.routes");
const authRoutes = require("./src/routes/auth.routes");
const productosRoutes = require("./src/routes/productos.routes");
const pedidosRoutes = require("./src/routes/pedidos.routes");
require("dotenv").config();

const app = express();


app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());


app.use("/api", productosRoutes);


app.use("/api", pedidosRoutes);


app.use("/api", usuarioRoutes);
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB conectado 🚀");
})
.catch((error) => {
    console.log("Error de conexión:", error);
});


app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});