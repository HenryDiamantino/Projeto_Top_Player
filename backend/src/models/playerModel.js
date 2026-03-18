import { conexao } from "../config/db.js";

export async function listarPlayers() {
    const [rows] = await conexao.query(
        "SELECT * FROM players ORDER BY id DESC"
    );
    return rows;
}

export async function buscarPlayerID(id) {
    const [rows] = await conexao.query(
        "SELECT * FROM players WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarPlayer({nickname, plataforma}) {
 
    const [resultado] = await conexao.query(
        "INSERT INTO players (nickname, plataforma) VALUES (?, ?)",
        [nickname, plataforma]
    );
    return resultado.insertId;
}

export async function atualizarPlayer(id, data) {
    const { nickname, plataforma } = data;

    await conexao.query(
        "UPDATE players SET nickname = ?, plataforma = ? WHERE id = ?",
        [nickname, plataforma, id]
    );
}

export async function deletarPlayer(id) {
    await conexao.query(
        "DELETE FROM players WHERE id = ?",
        [id]
    );
}
