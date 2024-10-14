const Producto = require("../models/Producto");

exports.crearProducto = async(req, res) => {
  try {
   let producto;
   // Crear nuevo producto
   producto=new Producto(req.body);
   // Guardar proyecto
   await producto.save()
     res.send(producto);

  } catch (error) {
 console.log(error);
    res.status(500).send("Hubo un error");
  }
};
//optener todos los productos
exports.obtenerProductos = async(req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//optener un producto por su id
exports.obtenerProductoPorId = async(req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

//actualizar proyecto id

exports.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar si el producto existe
    let producto = await Producto.findById(id);

    // Si el producto no existe, devolver un mensaje de error
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // Si el producto existe, actualizarlo
    producto = await Producto.findByIdAndUpdate(id, req.body, { new: true });

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Eliminar un proyecto por su id
exports.eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    // Buscar si el producto existe
    let producto = await Producto.findById(id);
    // Si el producto no existe, devolver un mensaje de error
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // Si el producto existe, eliminarlo
    await Producto.findByIdAndDelete(id);
    res.json({ msg: "El producto se eliminó correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};


