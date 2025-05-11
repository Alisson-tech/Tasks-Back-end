import "reflect-metadata"; 
import express from "express";
import AppDataSource from "./dataSource";
import router from "./routes/task.routes";
import { errorHandler } from "./middlewares/erroHandler";

const app = express();
const PORT = process.env.API_PORT;

app.use(express.json());

app.use("/api/task", router);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("🟢 Conectado ao banco de dados!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("🔴 Erro ao conectar com o banco:", err);
  });
