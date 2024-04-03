import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => {
              toggleTodo(todo.id);
            }}
          />
          {todo.title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
