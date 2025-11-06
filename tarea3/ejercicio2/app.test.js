const request = require('supertest');
const app = require('./app');

describe('GET /test', () => {
  it('responde 200 y { mensaje: "ok" }', async () => {
    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ mensaje: 'ok' });
  });
});

