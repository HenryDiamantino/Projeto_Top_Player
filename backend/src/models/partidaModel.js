import { conexao } from "../config/db.js";

export async function listarPartidas() {
    const [rows] = await conexao.query(
        `
        SELECT partidas.id, partidas.pontos, partidas.data_partida, j.nome AS jogo, p.nickname AS player FROM partidas
        INNER JOIN jogos j ON j.id = partidas.jogo_id
        INNER JOIN players p ON p.id = partidas.player_id
        `
    );
    return rows;
}

export async function buscarPorId(id) {
    const [rows] = await conexao.query(
        "SELECT * FROM partidas WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarPartida({ player_id, jogo_id, pontos }) {

    const sql = `INSERT INTO partidas (player_id, jogo_id, pontos) VALUES (${player_id}, ${jogo_id}, ${pontos})`
    const [result] = await conexao.query(
        sql
    );
    return result.insertId;
}

export async function atualizarPartida(id, { pontos }) {
    await conexao.query(
        "UPDATE partidas SET pontos = ? WHERE id = ?",
        [pontos, id]
    );
}

export async function deletarPartida(id) {
    await conexao.query(
        "DELETE FROM partidas WHERE id = ?",
        [id]
    );
}