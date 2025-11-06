const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./app');
const { SECRET } = require('./authMiddelware');

describe('GET /admin protegido por authMiddleware', () => {
  it('401 si no hay token', async () => {
    const res = await request(app).get('/admin');
    expect(res.status).toBe(401);
  });

  it('401 si el token es invalido', async () => {
    const res = await request(app)
      .get('/admin')
      .set('Authorization', 'Bearer token_invalido');
    expect(res.status).toBe(401);
  });

  it('200 y { mensae: "ok" } con token valido', async () => {
    const token = jwt.sign({ id: 123, nombre: 'Test' }, SECRET, { expiresIn: '5m' });
    const res = await request(app)
      .get('/admin')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ mensae: 'ok' });
  });
});
