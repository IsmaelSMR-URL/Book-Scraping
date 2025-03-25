const { getLibros } = require('../services/dbService');

function clusterizarLibros(libros) {
  const precios = libros.map(l => l.precio);
  const sorted = [...precios].sort((a, b) => a - b);

  // Definir rangos (bajo, medio, alto)
  const bajoMax = sorted[Math.floor(sorted.length * 0.33)];
  const medioMax = sorted[Math.floor(sorted.length * 0.66)];

  return libros.map(libro => {
    if (libro.precio <= bajoMax) return { ...libro, grupo: 'Bajo' };
    if (libro.precio <= medioMax) return { ...libro, grupo: 'Medio' };
    return { ...libro, grupo: 'Alto' };
  });
}

async function getLibrosClusterizados() {
  const libros = await getLibros();
  return clusterizarLibros(libros);
}

module.exports = { getLibrosClusterizados };