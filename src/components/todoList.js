import React, { useEffect } from "react";
import { useTodoContext } from "../context/todoProvider";
import UpdateTodo from "./updateTodo";
import TabSelector from "./tabSelector";

const TodoList = ({tab, onTabChange}) => {
 const { todos } = useTodoContext();
 const filteredTodos = useMemo(() => todos.filter(todo => {
  if (tab === 'all') {
    return true;
  } else if (tab === 'completed') {
    return todo.completed;
  } else {
    return !todo.completed;
  }
}),[todos, tab])



 return (
   <>
      <TabSelector tab={tab} onTabChange={onTabChange} />
      <ul>
        {(filteredTodos.length === 0) && <p>No todos for this tab</p>}
        {filteredTodos.map((todo) => (
          <UpdateTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
 );
};

export default TodoList;
