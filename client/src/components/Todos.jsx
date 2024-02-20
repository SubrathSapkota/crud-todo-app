import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Todos = ({ updateTodosMode, todoText, deleteTodoMode }) => {
  return (
    <div className="bg-white px-2 py-2 flex justify-between items-center gap-2 rounded">
      <div className="flex gap-1 justify-center items-center">
        <input type="checkbox" className="h-2" />
        <p className={`text-[10px] `}>{todoText}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={updateTodosMode}>
          <AiFillEdit size={15} className="text-blue-400" />
        </button>
        <button onClick={deleteTodoMode}>
          <MdDelete size={15} className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default Todos;
