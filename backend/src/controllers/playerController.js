import * as playerModel from "../models/playerModel.js";

export async function listar(req, res) {
    const players = await playerModel.listarPlayers(req.body);
    res.json(players);
}

export async function buscar(req, res) {
    const player = await playerModel.buscarPlayerID(req.params.id);

    if (!player) {
        return res.status(404).json({
            msg: "Player não encontrado"
        });
    }

    res.json(player);
}

export async function criar(req, res) {
    const { nickname, plataforma } = req.body;
    if (!nickname) return res.status(400).json({msg: "nickname é obrigatório" });
    
    const id = await playerModel.criarPlayer({ nickname, plataforma: plataforma || "OUTRO" });

    res.status(201).json({msg: "Player criado com sucesso", id});
}

export async function atualizar(req, res) {
    const id = req.params.id;

    const player = await playerModel.buscarPlayerID(id);

    if (!player) {
        return res.status(404).json({
            msg: "Player não encontrado"
        });
    }

    await playerModel.atualizarPlayer(id, req.body);

    res.json({
        msg: "Player atualizado com sucesso"
    });
}

export async function remover(req, res) {
    const id = req.params.id;

    const player = await playerModel.buscarPlayerID(id);

    if (!player) {
        return res.status(404).json({
            msg: "Player não encontrado"
        });
    }

    await playerModel.deletarPlayer(id);

    res.json({
        msg: "Player removido com sucesso"
    });
}