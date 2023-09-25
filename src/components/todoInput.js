import React from "react";
import { useTodoContext } from "../context/todoProvider";

const TodoInput = () => {
 const { inputText, addTodo, handleInputChange, editId } = useTodoContext();
 return (
  <div className="input">
   <input
    type="text"
    placeholder="Add a new todo..."
    value={inputText}
    onChange={handleInputChange}
    className="input-box"
   />
   <button onClick={addTodo} className="submit-button">Add Todo</button>
  </div>
 );
};

export default TodoInput;
