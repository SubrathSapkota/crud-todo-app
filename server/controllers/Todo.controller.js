import { Todo } from "../models/Todo.module.js";

//get all todos
const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

//create todos
const addTodos = async (req, res) => {
  const { todoText } = req.body;
  Todo.create({ todoText })
    .then((data) => {
      console.log("Added Successfully");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

//Update Todos
const updateTodos = async (req, res) => {
  const { _id, todoText } = req.body;
  Todo.findByIdAndUpdate(_id, { todoText })
    .then(() => res.send("Todo Updated Successfully."))
    .catch((err) => console.log(err));
};

//Delete todos
const deleteTodos = async (req, res) => {
  const { _id } = req.body;
  Todo.findByIdAndDelete(_id)
    .then(() => res.send("Todo Deleted."))
    .catch((err) => console.log(err));
};

export { getAllTodos, addTodos,updateTodos,deleteTodos };
