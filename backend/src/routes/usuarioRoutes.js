import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";

const router = Router();

/**
 * @swagger
 * /usuarios:
 *  get:
 *       summary: Lista todos os usuários
 *       tags: [Usuários]
 *       responses:
 *           200:
 *               description: Lista de usuários retornada com sucesso
 */
router.get("/", usuarioController.listar);


/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Busca um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.get("/:id", usuarioController.buscarPorId);



router.put("/:id", usuarioController.atualizar)


/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Entra em um usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário logou com sucesso
 */
router.post("/login", usuarioController.login);


/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/", usuarioController.criar);


/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete("/:id", usuarioController.deletar);

export default router;