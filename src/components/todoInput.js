import React from "react";
import { useTodoContext } from "../context/TodoProvider";

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
   <button onClick={addTodo}>Add</button>
  </div>
 );
};

export default TodoInput;