import React from "react";

function Footer({ newTask, handleAddNewTask, handleSubmit }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <label htmlFor="newitem">Add to the to do list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        name="input-item"
        onChange={handleAddNewTask}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default Footer;
