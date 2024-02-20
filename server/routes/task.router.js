import express from "express";
import {
  getAllTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} from "../controllers/Todo.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/addtodo", addTodos);
router.patch("/updatetodo", updateTodos);
router.post("/deletetodo", deleteTodos);

export { router };
