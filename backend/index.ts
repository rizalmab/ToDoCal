import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import todoRouter from "./src/modules/todos/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8001;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/v1/todos", todoRouter);

app.listen(port, () => {
  console.log(`🟢 Server is running at https://localhost:${port}`);
});
