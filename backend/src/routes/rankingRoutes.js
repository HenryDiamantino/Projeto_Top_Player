import { Router } from "express";
import * as rankingController from "../controllers/rankingController.js";

const router = Router();


/**
 * @swagger
 * /rankings/jogo/{id}:
 *   get:
 *     summary: Busca um ranking
 *     tags: [Ranking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do ranking
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ranking encontrado com sucesso
 *       404:
 *         description: Ranking não encontrado
 */
router.get("/jogo/:id", rankingController.listarPorJogo);
router.get("/geral", rankingController.listarGeral);

export default router;