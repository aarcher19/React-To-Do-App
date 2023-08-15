import "./App.css";
import React, { useState } from "react";
import TaskList from "./taskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState("");

  const handleTaskChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === "") return;
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handelDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>My To-Do List</h1>
        </header>
        <main>
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            onDeleteTask={handelDeleteTask}
          />
          <form onSubmit={handleAddTask}>
            <input
              className="appInput"
              type="text"
              placeholder="Add Task"
              value={newTaskText}
              onChange={handleTaskChange}
            />
            <button type="submit">Add</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default App;
