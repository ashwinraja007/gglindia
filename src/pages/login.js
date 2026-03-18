import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // Validate credentials
    if (email === 'info.india@ggl.sg' && password === 'GGLIndia@123') {
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'a_very_long_random_string_for_jwt_signing', { expiresIn: '2h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}