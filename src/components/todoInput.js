import React from "react";
import { useTodoContext } from "../context/todoProvider";

const TodoInput = () => {
 const { inputText, addTodo, handleInputChange } = useTodoContext();
 return (
  <div>
   <input
    type="text"
    placeholder="Add a new todo..."
    value={inputText}
    onChange={handleInputChange}
   />
   <button disabled={editing}>Add Todo</button>
  </div>
 );
};

export default TodoInput;
