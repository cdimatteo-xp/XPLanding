// server.js
const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar cualquier ruta que no sea un archivo estático y enviarla al index.html
// Esto es vital para que funcione el React Router si lo usas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Usar el puerto que asigna Azure (process.env.PORT)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});