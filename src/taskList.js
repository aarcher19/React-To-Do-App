import React from "react";
import "./taskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };
  return (
    <div>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <input
              className="taskListInput"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskToggle(task.id)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
