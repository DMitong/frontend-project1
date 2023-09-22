import React from "react";
import { useTodoContext } from "../context/TodoProvider";
import UpdateTodo from "./UpdateTodo";

const TodoList = () => {
 const { todos } = useTodoContext();

 return (
  <ul>
   {todos.map((todo) => (
    <UpdateTodo key={todo.id} todo={todo} />
   ))}
  </ul>
 );
};

export default TodoList;