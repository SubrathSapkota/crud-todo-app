import express from "express";
import dotenv from "dotenv";
import {router} from "./routes/task.router.js";


dotenv.config();
const app = express();

//middleware
app.use(express.json())



app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", router);

//app.get('/api/v1/tasks')          - get all the tasks
//app.post('/api/v1/tasks')          - craete a new task
//app.get('/api/v1/tasks/:id')      - get single task
//app.patch('/api/v1/tasks/:id')      - update task
//app.delete('/api/v1/tasks/:id')      - delete task

app.listen(process.env.PORT | 5000, () => {
  console.log(`Server is running at: ${process.env.PORT}`);
});
