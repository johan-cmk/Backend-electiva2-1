const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");
const { crearProducto } = require("../controllers/productoController");

router.post("/productos", upload.single("imagen"), crearProducto);

module.exports = router;
