import { conexao } from "../config/db.js";

export async function listarJogos() {
    const [rows] = await conexao.query(
        "SELECT id, nome, genero FROM jogos ORDER BY id DESC"
    );
    return rows;
}

export async function buscarPorId(id) {
    const [rows] = await conexao.query(
        "SELECT id, nome, genero FROM jogos WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarJogo({ nome, genero }) {
    const [resultado] = await conexao.query(
        "INSERT INTO jogos (nome, genero) VALUES (?,?)",
        [nome, genero]
    );

    return resultado.insertId;
}

export async function atualizarJogo(id, { nome, genero }) {
    const [rows] = await conexao.query(
        "UPDATE jogos SET nome = ?, genero = ? WHERE id = ?",
        [nome, genero, id]
    );
    return rows;
}

export async function deletarJogo(id) {
    await conexao.query(
        "DELETE FROM jogos WHERE id = ?",
        [id]
    );
}