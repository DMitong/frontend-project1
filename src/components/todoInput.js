import React from "react";
import { useTodoContext } from "../context/todoProvider";

const TodoInput = () => {
 const { inputText, addTodo, handleInputChange, editId } = useTodoContext();
 return (
   <div className="input">
   <h1>ToDo App</h1>
   <input
    type="text"
    placeholder="Add a new todo..."
    value={inputText}
    onChange={handleInputChange}
    className="input-box"
   />
   <button onClick={addTodo} disabled={!!editId} className="submit-button">Add Todo</button>
  </div>
 );
};

export default TodoInput;
