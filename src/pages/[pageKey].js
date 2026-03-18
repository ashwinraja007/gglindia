import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';

// Initialize connection pool once per serverless instance
let dbPool;
function getPool() {
  if (!dbPool) {
    dbPool = mysql.createPool({
      host: process.env.DB_HOST || '68.178.157.109',
      user: process.env.DB_USER || 'Karthik',
      password: process.env.DB_PASSWORD || 'Karthik@2001',
      database: process.env.DB_NAME || 'gglindia_New',
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0
    });
  }
  return dbPool;
}

export default async function handler(req, res) {
  const { pageKey } = req.query;
  const pool = getPool();

  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT content_data FROM page_content WHERE page_key = ?', [pageKey]);
      if (rows.length > 0) {
        res.status(200).json(rows[0].content_data);
      } else {
        res.status(404).json({ error: 'Page content not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Database error fetching content' });
    }
  } else if (req.method === 'PUT') {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    try {
      // Verify token (replaces authenticateToken middleware)
      jwt.verify(token, process.env.JWT_SECRET || 'a_very_long_random_string_for_jwt_signing');
      const contentData = JSON.stringify(req.body);
      await pool.query(
        'INSERT INTO page_content (page_key, content_data) VALUES (?, ?) ON DUPLICATE KEY UPDATE content_data = ?',
        [pageKey, contentData, contentData]
      );
      res.status(200).json({ success: true, message: 'Content saved successfully' });
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized or database error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}