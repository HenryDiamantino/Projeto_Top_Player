import { conexao } from "../config/db.js";

export async function listarJogos() {
    const [rows] = await conexao.query(
        "SELECT id, nome, genero, plataforma FROM jogos ORDER BY id DESC"
    );
    return rows;
}

export async function buscarPorId(id) {
    const [rows] = await conexao.query(
        "SELECT id, nome, genero, plataforma FROM jogos WHERE id = ?",
        [id]
    );
    return rows[0];
}

export async function criarJogo({ nome, genero, plataforma }) {
    const [resultado] = await conexao.query(
        "INSERT INTO jogos (nome, genero, plataforma) VALUES (?,?,?)",
        [nome, genero, plataforma]
    );

    return resultado.insertId;
}