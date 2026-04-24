import { Router } from "express";
import * as jogoController from "../controllers/jogosController.js";

const router = Router();


/**
 * @swagger
 * /jogos:
 *  get:
 *       summary: Lista todos os jogos
 *       tags: [Jogos]
 *       responses:
 *           200:
 *               description: Lista de usuários retornada com sucesso
 */
router.get("/", jogoController.listar);


/**
 * @swagger
 * /jogos/{id}:
 *   get:
 *     summary: Busca por um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogo
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo encontrado com sucesso
 *       404:
 *         description: Jogo não encontrado
 */
router.get("/:id", jogoController.buscarPorId);


/**
 * @swagger
 * /jogos:
 *   post:
 *     summary: Cadastra um novo jogo
 *     tags: [Jogos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       201:
 *         description: Jogo criado com sucesso
 */
router.post("/", jogoController.criar);


router.put("/:id", jogoController.atualizar);


/**
 * @swagger
 * /jogos/{id}:
 *   delete:
 *     summary: Remove um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogo
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo removido com sucesso
 *       404:
 *         description: Jogo não encontrado
 */
router.delete("/:id", jogoController.deletar);

export default router;