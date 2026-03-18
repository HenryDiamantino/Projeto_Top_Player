import * as jogoModel from "../models/jogosModel.js";

export async function listar(req, res) {
    const jogos = await jogoModel.listarJogos();
    res.json(jogos);
}

export async function buscarPorId(req, res) {
    const jogo = await jogoModel.buscarPorId(req.params.id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    res.json(jogo);
}

export async function criar(req, res) {
    const { nome, genero, plataforma } = req.body;

    if (!nome) {
        return res.status(400).json({
            msg: "nome é obrigatório"
        });
    }

    const id = await jogoModel.criarJogo({
        nome,
        genero,
        plataforma
    });

    return res.status(201).json({
        msg: "Jogo criado com sucesso",
        id
    });
}