const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:${port}');
});
 ⁠

