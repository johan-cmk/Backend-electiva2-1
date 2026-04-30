const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usuarioRoutes = require("./routes/usuarios.routes");
const authRoutes = require("./routes/auth.routes");
const productosRoutes = require("./routes/productos.routes");
const pedidosRoutes = require("./routes/pedidos.routes");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "https://frontend-electiva2-1.vercel.app"
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
