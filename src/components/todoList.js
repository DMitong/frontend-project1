import React, { useEffect } from "react";
import { useTodoContext } from "../context/todoProvider";
import UpdateTodo from "./updateTodo";
import TabSelector from "./tabSelector";

const TodoList = ({tab, onTabChange}) => {
 const { todos } = useTodoContext();

 useEffect(() => {
  const filteredTodos = todos.filter(todo => {
  if (tab === 'all') {
    return true;
  } else if (tab === 'completed') {
    return todo.completed;
  } else {
    return !todo.completed;
  }
});
  if (filteredTodos.length === 0) {
  return <p>No todos for this tab</p>
}
}, [todos, tab])

 return (
  <>
  {tab && 
    <TabSelector
      currentTab={tab}
      onTabChange={onTabChange} 
    />
  }
  <ul>
   {filteredTodos.map((todo) => (
    <UpdateTodo key={todo.id} todo={todo} />
   ))}
  </ul>
  </>
 );
};

export default TodoList;
