import * as rankingModel from "../models/rankingModel.js";

export async function listarPorJogo(req, res) {
    try {
        const jogoId = req.params.id;
        const limite = req.query.limite || 10;

        const dados = await rankingModel.rankingPorJogo(jogoId, limite);

        res.json(dados);
    } catch (erro) {
        console.error("ERRO RANKING POR JOGO:", erro);
        res.status(500).json({ erro: "Erro ao buscar ranking por jogo" });
    }
}


export async function listarGeral(req, res) {
    try {
        const limite = req.query.limite || 10;

        const dados = await rankingModel.rankingGeral(limite);

        res.json(dados);
    } catch (erro) {
        console.error("ERRO RANKING GERAL:", erro);
        res.status(500).json({ erro: "Erro ao buscar ranking geral" });
    }
}