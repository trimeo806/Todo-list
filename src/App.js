import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import TaskList from "./component/TaskList";
import FilterWrapper from "./component/FilterWrapper";

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setnewTask] = useState("");
  const handleCheckboxAction = (taskId, status) => {
    setTask(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  };
  const handleAddNewTask = (e) => {
    setnewTask(e.target.value);
  };
  const [checkboxIncompletedTask, setcheckboxIncompletedTask] = useState("");
  const handlecheckboxIncompletedTask = () => {
    setcheckboxIncompletedTask(checkboxIncompletedTask === true ? false : true);
  };
  const handleRemoveEvent = (taskId) => {
    setTask(tasks.filter((task) => taskId !== task.id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setnewTask("");
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTask([...tasks, task]);
    }
  };
  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        checkboxIncompletedTask={checkboxIncompletedTask}
        handleCheckboxAction={handleCheckboxAction}
        handleRemoveEvent={handleRemoveEvent}
      />
      <FilterWrapper
        checkboxIncompletedTask={checkboxIncompletedTask}
        handlecheckboxIncompletedTask={handlecheckboxIncompletedTask}
      />
      <Footer
        newTask={newTask}
        handleAddNewTask={handleAddNewTask}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
