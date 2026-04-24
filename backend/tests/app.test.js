import request from 'supertest';
import app from '../src/app.js';

describe('Testes da API Express', () => {

  test('GET / deve retornar status da API', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      "msg": "Joao Fiotasso"
    });
  });

});