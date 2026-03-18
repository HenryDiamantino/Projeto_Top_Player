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
    const { jogador_id, jogo_id, pontuacao } = req.body;

    if (!jogador_id || !jogo_id) {
        return res.status(400).json({
            msg: "jogador_id e jogo_id são obrigatórios"
        });
    }

    const id = await partidaModel.criarPartida({
        jogador_id,
        jogo_id,
        pontuacao
    });

    res.status(201).json({
        msg: "Partida criada",
        id
    });
}

export async function atualizar(req, res) {
    const { pontuacao } = req.body;

    await partidaModel.atualizarPartida(req.params.id, {
        pontuacao
    });

    res.json({ msg: "Atualizada com sucesso" });
}

export async function deletar(req, res) {
    await partidaModel.deletarPartida(req.params.id);
    res.json({ msg: "Deletada com sucesso" });
}
