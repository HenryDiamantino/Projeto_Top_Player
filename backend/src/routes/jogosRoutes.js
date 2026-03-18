import { Router } from "express";
import * as jogoController from "../controllers/jogosController.js";

const router = Router();

router.get("/", jogoController.listar);
router.get("/:id", jogoController.buscarPorId);
router.post("/", jogoController.criar);

export default router;