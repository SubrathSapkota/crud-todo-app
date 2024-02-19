import { Task } from "../models/task.module.js";

const getAllTask = async (req, res) => {
  await Task.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

const createTask = async (req, res) => {
  const { taskName, completed } = req.body;
  await Task.create({
    taskName: req.body.taskname,
    completed: req.body.completed,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

const getTask = async (req, res) => {
  res.send("Get single Ites");
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const updateTask = req.body.taskname;

  await Task.findByIdAndUpdate(id, { taskName: updateTask });

  res.json({ message: "Task updated successfully" });
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  res.send("Get single Ites");
};

export { getAllTask, createTask, updateTask, getTask, deleteTask };
