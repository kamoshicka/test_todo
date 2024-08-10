import React,{useState} from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

const addTodo = (todo) => {
  setTodos ([...todos, todo]);
};

const removeTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
}

return (
  <>
  <AddTodo addTodo={addTodo} />
  <TodoList todos={todos} removeTodo={removeTodo}/>
  <p>input some todo</p>
  </>
);
};

export default HomePage