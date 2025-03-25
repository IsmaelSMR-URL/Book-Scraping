const mysql = require('mysql2/promise');

// Configuración directa sin .env
const pool = mysql.createPool({
  host: 'localhost',          // Tu host de MySQL
  user: 'root',         // Usuario de MySQL
  password: 'root',  // Contraseña de MySQL
  database: 'libros_db',      // Nombre de la base de datos
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;