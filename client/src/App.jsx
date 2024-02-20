import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodos,
} from "./uitls/HandleApi";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodos(setTodo);
  }, []);

  const updateTodosMode = (_id, todoText) => {
    setIsUpdating(true);
    setTodoText(todoText);
    setTodoId(_id);
  };

  return (
    <div className="w-full h-screen bg-slate-400 flex flex-col items-center gap-5">
      <div className="mt-10 bg-white h-24 w-80 shadow-2xl rounded flex flex-col items-center justify-center gap-5">
        <h1>TODO MANAGER</h1>
        <div className="w-full flex justify-center px-4">
          <input
            type="text"
            className=" w-full bg-slate-200 px-3 focus:outline-none text-[10px] py-1 rounded-l"
            placeholder="e.g: go to market"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />

          <button
            className="px-4 bg-blue-400 font-bold text-white text-[10px] py-1 rounded-r"
            onClick={
              isUpdating
                ? () =>
                    updateTodos(
                      todoId,
                      todoText,
                      setTodo,
                      setTodoText,
                      setIsUpdating
                    )
                : () => addTodo(todoText, setTodoText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <div className="w-80 flex flex-col gap-2">
        {todo.map(({ _id, todoText }) => {
          return (
            <Todos
              key={_id}
              todoText={todoText}
              updateTodosMode={() => updateTodosMode(_id, todoText)}
              deleteTodoMode={() => deleteTodo(_id, setTodo)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
