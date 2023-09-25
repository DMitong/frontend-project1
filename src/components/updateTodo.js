import React from "react";
import { useTodoContext } from "../context/todoProvider";

const UpdateTodo = ({ todo }) => {
 const { editId, setEditId, handleCheck, handleDelete, updateTodo, handleEdit } =
  useTodoContext();


// Validate input
const handleUpdate = (text) => {
  if (!text) {
    return;
  }
  updateTodo(todo.id, text);
   setEditId(null);
  }

 return (
  <li className="todo">
   <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => handleCheck(todo.id)}
   />
   {editId === todo.id ? (
    <input
     type="text"
     value={todo.title}
     onChange={(e) => handleEdit(todo.id, e.target.value)}
    />
   ) : (
    <span className={`todo-title ${todo.completed && "checked"}`}>
     {todo.title}
    </span>
   )}
   {editId === todo.id ? (
    <button onClick={() => setEditId(null)}>✅</button>
   ) : (
    <button
     className="del-button"
     onClick={() => setEditId(todo.id)}
     disabled={todo.completed}
    >
     ✏️
    </button>
   )}
   <button className="del-button" onClick={() => handleDelete(todo.id)}>
    🗑️
   </button>
  </li>
 );
};

export default UpdateTodo;
