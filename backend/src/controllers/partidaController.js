import * as partidaModel from "../models/partidaModel.js";

export async function listar(req, res) {
    const partidas = await partidaModel.listarPartidas();
    res.json(partidas);
}

export async function buscarPorId(req, res) {
    const partida = await partidaModel.buscarPorId(req.params.id);

    if (!partida) {
        return res.status(404).json({ msg: "Partida não encontrada" });
    }

    res.json(partida);
}

export async function criar(req, res) {
    const { player_id, jogo_id, pontos } = req.body;

    if (!player_id || !jogo_id) {
        return res.status(400).json({
            msg: "player_id e jogo_id são obrigatórios"
        });
    }

    const id = await partidaModel.criarPartida({
        player_id,
        jogo_id,
        pontos
    });

    res.status(201).json({
        msg: "Partida criada",
        id
    });
}

export async function atualizar(req, res) {
    const { pontos } = req.body;

    await partidaModel.atualizarPartida(req.params.id, {
        pontos
    });

    res.json({ msg: "Atualizada com sucesso" });
}

export async function deletar(req, res) {
    await partidaModel.deletarPartida(req.params.id);
    res.json({ msg: "Deletada com sucesso" });
}
