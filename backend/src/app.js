import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import jogosRoutes from "./routes/jogosRoutes.js";
import partidasRoutes from "./routes/partidaRoutes.js";
import playersRoutes from "./routes/playerRoutes.js";
import rankingRoutes from "./routes/rankingRoutes.js";

const app = express();
app.use(express.json()) //Formato JSON
app.use(cors()) // Deixa o back conectar com o front

app.get("/", (req, res) => {
    res.json({ msg: "Joao Fiotasso" });
});

app.use("/usuarios", usuarioRoutes);
app.use("/jogos", jogosRoutes);
app.use("/players", playersRoutes);
app.use("/partidas", partidasRoutes);
app.use("/rankings", rankingRoutes);

export default app