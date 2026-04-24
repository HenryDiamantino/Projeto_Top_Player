 import request from 'supertest';
import app from '../src/app.js';

describe('Testes da API de Players', () => {
    let playerId;
    let nicknameTeste;

    // 🔥 cria um player base
    beforeAll(async () => {
        nicknameTeste = `Player_${Date.now()}`;

        const response = await request(app)
            .post('/players')
            .send({
                nickname: nicknameTeste,
                plataforma: "PC"
            });

        playerId = response.body.id;
    });

    test('POST /players deve criar um novo player', async () => {
        const response = await request(app)
            .post('/players')
            .send({
                nickname: `Player_${Date.now()}`, // 🔥 evita duplicação
                plataforma: "PS"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('GET /players deve listar todos os players', async () => {
        const response = await request(app)
            .get('/players');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /players/:id deve buscar um player existente', async () => {
        const response = await request(app)
            .get(`/players/${playerId}`);

        expect(response.statusCode).toBe(200);
    });

    test('GET /players/:id deve retornar 404 para player inexistente', async () => {
        const response = await request(app)
            .get('/players/999999');

        expect(response.statusCode).toBe(404);
    });

    test('DELETE /players/:id deve remover um player', async () => {
        const response = await request(app)
            .delete(`/players/${playerId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe("Player removido com sucesso");
    });

    test('DELETE /players/:id deve retornar 404 para ID inexistente', async () => {
        const response = await request(app)
            .delete('/players/999999');

        expect(response.statusCode).toBe(404);
    });

});