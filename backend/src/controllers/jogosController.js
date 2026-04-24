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
    try {
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
    } catch (error) {
        // Verifica se o erro é de duplicidade
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ // 409 = Conflict
                msg: "Este jogo já está cadastrado!"
            });
        }

        // Se for outro erro qualquer
        return res.status(500).json({ msg: "Erro interno no servidor" });
    }
}

export async function atualizar(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarPorId(id);

    if (!jogo) {
        return res.status(404).json({
            msg: "Jogo não encontrado"
        });
    }

    await jogoModel.atualizarJogo(id, req.body);

    res.json({
        msg: "Jogo atualizado com sucesso"
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