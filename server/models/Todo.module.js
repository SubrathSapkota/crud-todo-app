import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  todoText: {
    type: String,
    required: true,
  },
 
});

export const Todo = mongoose.model("Todos", TodoSchema);
