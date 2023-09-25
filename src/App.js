import React, { useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/todoProvider";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import TabSelector from "./components/tabSelector";

const App = () => {
  const [tab, setTab] = useState("all");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div className="App">
      <TodoProvider>
        <div className="todo-wrapper">
          <TodoInput />
          <TabSelector tab={tab} onTabChange={handleTabChange} />
          <TodoList tab={tab} />
        </div>
      </TodoProvider>
    </div>
  );
};

export default App;
