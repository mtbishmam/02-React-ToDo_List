import React, { useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, done: false }];
    });
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          if (todo.done) return { ...todo, done: false };
          return { ...todo, done: true };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm
        addTodo={addTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
      <h1 className="header">To-Do List</h1>
      <TodoList
        key={crypto.randomUUID()}
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default App;
