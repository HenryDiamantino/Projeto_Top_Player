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
    const { nome, genero } = req.body;

    if (!nome) {
        return res.status(400).json({
            msg: "nome é obrigatório"
        });
    }

    const id = await jogoModel.criarJogo({
        nome,
        genero
    });

    return res.status(201).json({
        msg: "Jogo criado com sucesso",
        id
    });
}

export async function deletar(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarPorId(id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    await jogoModel.deletarJogo(id);

    res.json({
        msg: "Jogo removido com sucesso"
    });
}