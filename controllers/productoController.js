const db = require("../db");
const cloudinary = require("../config/cloudinary");

const crearProducto = async (req, res) => {
  try {
    const nombre = req.body.nombre;

    const resultado = await cloudinary.uploader.upload(req.file.path);

    const url = resultado.secure_url;

    db.query(
      "INSERT INTO productos (nombre, imagen) VALUES (?, ?)",
      [nombre, url],
      (err) => {
        if (err) return res.status(500).json(err);

        res.json({ mensaje: "Producto creado", imagen: url });
      }
    );

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearProducto };
