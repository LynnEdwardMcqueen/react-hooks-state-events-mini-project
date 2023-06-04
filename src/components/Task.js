import React from "react";

function Task({task, category, onTaskDelete}) {
  console.log("Task task, category", task, category)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick= {(event) => onTaskDelete(task) }>X</button>
    </div>
  );
}

export default Task;
