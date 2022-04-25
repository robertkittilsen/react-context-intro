import React from "react";
import { useTodos } from "../../contexts/Todos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const tasks = useTodos();
  return (
    <ul>
      {tasks.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
