import { conexao } from "../config/db.js";

export async function listarPartidas() {
    const [rows] = await conexao.query(
        "SELECT * FROM partidas ORDER BY id DESC"
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

export async function criarPartida({ jogador_id, jogo_id, pontuacao }) {
    const [result] = await conexao.query(
        "INSERT INTO partidas (jogador_id, jogo_id, pontuacao) VALUES (?, ?, ?)",
        [jogador_id, jogo_id, pontuacao]
    );
    return result.insertId;
}

export async function atualizarPartida(id, { pontuacao }) {
    await conexao.query(
        "UPDATE partidas SET pontuacao = ? WHERE id = ?",
        [pontuacao, id]
    );
}

export async function deletarPartida(id) {
    await conexao.query(
        "DELETE FROM partidas WHERE id = ?",
        [id]
    );
}