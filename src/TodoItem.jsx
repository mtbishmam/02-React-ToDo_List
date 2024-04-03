import React from "react";

const TodoItem = ({ id, title, done, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={() => {
              toggleTodo(id);
            }}
          />
          {title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
