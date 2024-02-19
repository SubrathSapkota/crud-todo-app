import { Task } from "../models/task.module.js";

const getAllTask = async (req, res) => {
  const getTask = await Task.find();
  res.json({ alltask: getTask });
};

const createTask = async (req, res) => {
  const setTask = await new Task({
    taskName: req.body.taskname,
    completed: req.body.completed,
  });

  await setTask.save();
  res.json({ message: "Items added Successfully", setTask });
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
