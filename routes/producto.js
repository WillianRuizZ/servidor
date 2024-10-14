//Rutas para producto
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

//api/productos


// Crear un nuevo proyecto
router.post("/", productoController.crearProducto);

//Optener todos los productos
router.get("/", productoController.obtenerProductos);
//optener un proyecto por su id
router.get("/:id", productoController.obtenerProductoPorId);

//actualizar producto id
router.put("/:id", productoController.actualizarProducto);

// Eliminar un producto por su id
router.delete("/:id", productoController.eliminarProducto);

module.exports = router;
