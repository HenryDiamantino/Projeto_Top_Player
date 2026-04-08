import { Router } from "express";
import * as partidaController from "../controllers/partidaController.js";

const router = Router();


/**
 * @swagger
 * /partidas:
 *  get:
 *       summary: Lista todas as partidas
 *       tags: [Partidas]
 *       responses:
 *           200:
 *               description: Lista de partidas retornada com sucesso
 */
router.get("/", partidaController.listar);


/**
 * @swagger
 * /partidas/{id}:
 *   get:
 *     summary: Busca uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida encontrada com sucesso
 *       404:
 *         description: Partida não encontrado
 */
router.get("/:id", partidaController.buscarPorId);


/**
 * @swagger
 * /partidas:
 *   post:
 *     summary: Cadastra uma nova partida
 *     tags: [Partidas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pontos:
 *                 type: number
 *               jogo_id:
 *                 type: number
 *               player_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Partida criada com sucesso
 */
router.post("/", partidaController.criar);


/**
 * @swagger
 * /partidas/{id}:
 *   put:
 *     summary: Atualiza uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida atualizada com sucesso
 *       404:
 *         description: Partida não encontrada
 */
router.put("/:id", partidaController.atualizar);


/**
 * @swagger
 * /partidas/{id}:
 *   delete:
 *     summary: Remove uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida removida com sucesso
 *       404:
 *         description: Partida não encontrada
 */
router.delete("/:id", partidaController.deletar);

export default router;