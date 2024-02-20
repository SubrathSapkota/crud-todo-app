import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/task.router.js";
import { connectionInstance } from "./db/connect.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/tasks", router);

const startServer = async () => {
  try {
    await connectionInstance();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};



startServer();
