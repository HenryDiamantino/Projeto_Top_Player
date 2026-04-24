import request from 'supertest';
import app from '../src/app.js';

describe('Testes da API de Jogos', () => {
    let jogoId;
    let nomeTeste;

    beforeAll(async () => {
        nomeTeste = `Jogo_${Date.now()}`;

        const response = await request(app)
            .post('/jogos')
            .send({
                nome: nomeTeste,
                genero: "Esporte"
            });

        jogoId = response.body.id;
    });

    test('POST /jogos deve criar um novo jogo', async () => {
        const response = await request(app)
            .post('/jogos')
            .send({
                nome: `Jogo_${Date.now()}`,
                genero: "Ação"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    test('GET /jogos deve listar todos os jogos', async () => {
        const response = await request(app)
            .get('/jogos');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test('GET /jogos/:id deve buscar um jogo existente', async () => {
        const response = await request(app)
            .get(`/jogos/${jogoId}`);

        expect(response.statusCode).toBe(200);
    });

    test('PUT /jogos/:id deve atualizar um jogo existente', async () => {
        const response = await request(app)
            .put(`/jogos/${jogoId}`)
            .send({
                nome: nomeTeste, 
                genero: "Atualizado"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toMatch(/atualizado/i);
    });

    test('DELETE /jogos/:id deve remover um jogo', async () => {
        const response = await request(app)
            .delete(`/jogos/${jogoId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toMatch("Jogo removido com sucesso");
    });

    test('DELETE /jogos/:id deve retornar 404 para ID inexistente', async () => {
        const response = await request(app)
            .delete('/jogos/999999');

        expect(response.statusCode).toBe(404);
    });

    test('POST /jogos não deve permitir jogo duplicado', async () => {
        const nome = `Jogo_Fixo_${Date.now()}`;

        // cria primeira vez
        await request(app)
            .post('/jogos')
            .send({ nome, genero: "Ação" });

        // tenta duplicar
        const response = await request(app)
            .post('/jogos')
            .send({ nome, genero: "Ação" });

        expect(response.statusCode).toBe(409);
        expect(response.body.msg).toMatch("Este jogo já está cadastrado!");
    });

});