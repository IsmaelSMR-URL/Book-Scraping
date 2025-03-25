const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', bookRoutes);
app.use(express.static('public')); // Sirve el frontend

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});