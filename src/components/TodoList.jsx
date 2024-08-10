import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ( {todos, removeTodo} ) => {
  return (
    <div className="todo-list">
      {todos.map( todo => (
        <>
        <TodoItem key={todos.id} todo={todo} />
        <button onClick={() => removeTodo(todo.id)}>Done</button>
        </>
      ))} 
    </div>
  );
};

export default TodoList;