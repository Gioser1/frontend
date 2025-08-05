const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde ../frontend
app.use('/', express.static(path.join(__dirname, '../frontend')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/comentarios.html'));
});


app.post('/comentarios', (req, res) => {
  const nuevoComentario = req.body;
  const filePath = path.join(__dirname, 'comentarios.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let comentarios = [];
    if (!err && data) {
      comentarios = JSON.parse(data);
    }
    comentarios.unshift(nuevoComentario);
    fs.writeFile(filePath, JSON.stringify(comentarios, null, 2), err => {
      if (err) return res.status(500).send('Error al guardar');
      res.status(200).send('Guardado');
    });
  });
});

// Ruta para obtener los comentarios (opcional)
app.get('/comentarios', (req, res) => {
  const filePath = path.join(__dirname, 'comentarios.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.json([]);
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
