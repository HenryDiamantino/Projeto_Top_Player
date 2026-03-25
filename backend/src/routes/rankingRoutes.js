import { Router } from "express";
import * as rankingController from "../controllers/rankingController.js";

const router = Router();

router.get("/jogo/:id", rankingController.listarPorJogo);
router.get("/geral", rankingController.listarGeral);

export default router;