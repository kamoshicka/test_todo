import React from "react";

const TodoItem = ({todo, removeTodo}) => {
  return (
    <>
    <div className="todo-item">
      {todo.text} 
    </div>
    </>
  );
};

export default TodoItem;