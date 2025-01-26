import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express boilerplate!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
