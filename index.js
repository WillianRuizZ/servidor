// index.js
const express = require("express");
const cors = require("cors");

// Importar la función para conectar a la base de datos
const conectarDb = require("./config/db");

// Conectar a la base de datos
conectarDb();

const app = express();

// Middleware para CORS
app.use(cors());

// Definir ruta principal
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Definir el puerto
const PORT = process.env.PORT || 4000; // Usar el puerto definido en las variables de entorno o 4000 por defecto

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
