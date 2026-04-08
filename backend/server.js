import dotenv from "dotenv";
dotenv.config();
import swaggerUI from "swagger-ui-express";
import swaggerSPec from "./swagger.js";
import app from "./src/app.js";

const PORT = process.env.PORT || 5000;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSPec));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/api-docs`);
});