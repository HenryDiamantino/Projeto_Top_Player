import { conexao } from "../config/db.js";

export async function listarUsuarios() {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios ORDER BY id DESC"
    );

    return rows;
};

export async function buscarPorId(id) {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",
        [id]
    );
    return rows[0];
};

export async function criarUsuario({ nome, email, senha_hash }) {
    const [rows] = await conexao.query(
        "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)",
        [nome, email, senha_hash]
    );

    return rows.insertId;
};

export async function buscarUsuarioPorEmail(email) {
    const [rows] = await conexao.query(
        "SELECT id, nome, email, senha_hash, criado_em FROM usuarios WHERE email = ?",
        [email]
    );

    return rows[0];
};

export async function deletarUsuario(id) {
    try {
        const [rows] = await conexao.query(
            "DELETE FROM usuarios WHERE id = ?", [id]
        );

        if (rows.affectedRows >= 1) {
            return true
        }

        return false;
    } catch (error) {
        console.error(error)
    }
};