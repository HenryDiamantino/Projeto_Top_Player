import { Router } from "express";
import * as playerController from "../controllers/playerController.js";

const router = Router();


/**
 * @swagger
 * /players:
 *  get:
 *       summary: Lista todos os players
 *       tags: [Players]
 *       responses:
 *           200:
 *               description: Lista de players retornada com sucesso
 */
router.get("/", playerController.listar);


/**
 * @swagger
 * /players/{id}:
 *   get:
 *     summary: Busca um player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do player
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player encontrado com sucesso
 *       404:
 *         description: Player não encontrado
 */
router.get("/:id", playerController.buscar);


/**
 * @swagger
 * /players:
 *   post:
 *     summary: Cadastra um novo player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               plataforma:
 *                 type: string
 *     responses:
 *       201:
 *         description: Player criado com sucesso
 */
router.post("/", playerController.criar);


/**
 * @swagger
 * /players/{id}:
 *   put:
 *     summary: Atualiza um player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do player
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player atualizado com sucesso
 *       404:
 *         description: Player não encontrado
 */
router.put("/:id", playerController.atualizar);


/**
 * @swagger
 * /players/{id}:
 *   delete:
 *     summary: Remove um player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do player
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player removido com sucesso
 *       404:
 *         description: Player não encontrado
 */
router.delete("/:id", playerController.remover);

export default router;