import React from "react";

const NewTodoForm = ({ addTodo, newTodo, setNewTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") return;
    addTodo(newTodo);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="new-item-form"
    >
      <div className="form-row">
        <label htmlFor="new-item">New Item</label>
        <input
          type="text"
          id="new-item"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
