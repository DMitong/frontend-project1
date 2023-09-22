import React from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
 return (
  <div className="App">
   <TodoProvider>
    <div className="todo-wrapper">
     <TodoInput />
     <TodoList />
    </div>
   </TodoProvider>
  </div>
 );
};

export default App;