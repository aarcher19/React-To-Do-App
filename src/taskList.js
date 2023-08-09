import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <input type="checkbox" checked={task.completed} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
