const express = require('express');
const router = express.Router();
const { getLibrosClusterizados } = require('../controllers/bookCluster');
const { addLibro } = require('../services/dbService');

router.get('/libros/cluster', async (req, res) => {
  try {
    const libros = await getLibrosClusterizados();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/libros/scrape', async (req, res) => {
  try {
    await addLibro(req.body);
    res.json({ cantidad: 1, mensaje: 'Libro agregado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;