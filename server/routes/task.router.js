import express from "express";
import {
  getAllTask,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export { router };
