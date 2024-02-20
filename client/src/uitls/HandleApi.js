import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/tasks";

export const getAllTodos = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data-->", data);
    setToDo(data);
  });
};

export const addTodo = (todoText, setTodoText, setTodo) => {
  axios
    .post(`${baseUrl}/addtodo`, { todoText })
    .then((data) => {
      console.log(data);
      setTodoText("");
      getAllTodos(setTodo);
    })
    .catch((err) => console.log(err));
};

export const updateTodos = (
  todoId,
  todoText,
  setTodo,
  setTodoText,
  setIsUpdating
) => {
  axios
    .patch(`${baseUrl}/updatetodo`, { _id: todoId, todoText })
    .then(() => {
      console.log("Todo Updated Successfully");
      getAllTodos(setTodo);
      setTodoText("");
      setIsUpdating(false);
    })
    .catch((err) => console.log(err));
};

export const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/deletetodo`, { _id })
    .then(() => {
      console.log("Todo deleted");
      getAllTodos(setTodo);
    })
    .catch((err) => console.log(err));
};
