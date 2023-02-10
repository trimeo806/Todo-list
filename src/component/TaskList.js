import React from "react";

function TaskList({
  tasks,
  checkboxIncompletedTask,
  handleCheckboxAction,
  handleRemoveEvent,
}) {
  return (
    <ul className="task-list">
      {tasks
        .filter((task) => (checkboxIncompletedTask ? task.status === 0 : true))
        //  Nếu filter trả về true thì tức là không cần filter gì cả?
        .map((task) => (
          <li key={task.id} className={task.status === 1 ? "done" : ""}>
            <span className="label">{task.title}</span>
            <div className="actions">
              <input
                type="checkbox"
                className="btn-action btn-action-done"
                checked={task.status === 1 ? true : false}
                onChange={() =>
                  handleCheckboxAction(task.id, task.status === 1 ? 0 : 1)
                }
              />
              <button
                className="btn-action btn-action-delete"
                onClick={() => handleRemoveEvent(task.id)}
              >
                𐄂
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default TaskList;
