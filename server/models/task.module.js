import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

export const Task = mongoose.model("task",taskSchema)