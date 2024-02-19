import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Todos = ({ id, taskName }) => {
  return (
    <div className="bg-white px-4 py-2 flex justify-between items-center gap-2 rounded">
      <p className="text-[10px]">{taskName}</p>
      <div className="flex gap-2">
        <button>
          <AiFillEdit size={15} className="text-blue-400" />
        </button>
        <button>
          <MdDelete size={15} className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default Todos;
