import express from "express";
import { getAllTask } from "../controllers/task.controller.js";

const router = express.Router();

router.route("/").get(getAllTask);

export { router };
