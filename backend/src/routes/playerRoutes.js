import { Router } from "express";
import * as playerController from "../controllers/playerController.js";

const router = Router();

router.get("/", playerController.listar);
router.get("/:id", playerController.buscar);
router.post("/", playerController.criar);
router.put("/:id", playerController.atualizar);
router.delete("/:id", playerController.remover);

export default router;