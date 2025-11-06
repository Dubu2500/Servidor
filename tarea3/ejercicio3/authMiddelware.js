const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'palabrasecreta';

function authMiddelware(req, res, next) {
  const auth = req.header('Authorization') || '';
  const parts = auth.split(' ');
  const token = parts.length === 2 ? parts[1] : undefined;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = { authMiddelware, SECRET };
