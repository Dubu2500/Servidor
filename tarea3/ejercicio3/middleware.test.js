const { authMiddelware, SECRET } = require('./authMiddelware');
const jwt = require('jsonwebtoken');

describe('authMiddleware', () => {
  it('llama next() con token válido y asigna req.user', () => {
    const token = jwt.sign({ id: 1, role: 'admin' }, SECRET, { expiresIn: '5m' });
    const req = { header: () => `Bearer ${token}` };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authMiddelware(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(req.user).toMatchObject({ id: 1, role: 'admin' });
  });

  it('responde 401 si no hay token', () => {
    const req = { header: () => '' };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    authMiddelware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    expect(next).not.toHaveBeenCalled();
  });
});
