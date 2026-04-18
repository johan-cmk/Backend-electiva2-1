const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

// crear usuario
router.post("/usuarios", async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// obtener usuarios
router.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// actualizar usuario
router.put("/usuarios/:id", async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// eliminar usuario
router.delete("/usuarios/:id", async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);

        res.status(200).json({ mensaje: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;