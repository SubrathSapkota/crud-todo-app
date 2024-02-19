import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import axios from "axios";

const App = () => {
  const [task, setTask] = useState({
    taskName: "",
    completed: false,
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tasks")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(tasks);
  return (
    <div className="w-full h-screen bg-slate-400 flex flex-col items-center gap-5">
      <div className="mt-10 bg-white h-24 w-80 shadow-2xl rounded flex flex-col items-center justify-center gap-5">
        <h1>TODO MANAGER</h1>
        <div className="w-full flex justify-center px-4">
          <input
            type="text"
            className=" w-full bg-slate-200 px-3 focus:outline-none text-[10px] py-1 rounded-l"
            placeholder="e.g: go to market"
          />
          <button className="px-4 bg-blue-400 font-bold text-white text-[10px] py-1 rounded-r">
            ADD
          </button>
        </div>
      </div>
      <div className="w-80 flex flex-col gap-2">
        {tasks.length === 0 ? (
          <div>
            <h2>No Record</h2>
          </div>
        ) : (
          tasks.map(({ _id, taskName }) => (
            <Todos key={_id} id={_id} taskName={taskName} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
