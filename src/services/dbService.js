const pool = require('../config/database');

async function getLibros() {
  const [rows] = await pool.query('SELECT * FROM libros');
  return rows;
}

async function addLibro(libro) {
  const { titulo, precio, rating, genero } = libro;
  await pool.query(
    'INSERT INTO libros (titulo, precio, rating, genero) VALUES (?, ?, ?, ?)',
    [titulo, precio, rating, genero]
  );
}

module.exports = { getLibros, addLibro };