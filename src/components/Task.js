import React from "react";

function Task({text, category, onTaskDelete}) {
  
  return (
    <div className="task">
      <div className="text">{text}</div>
      <div className="label">{category}</div>
      <button className="delete" onClick= {(event) => onTaskDelete(text) }>X</button>
    </div>
  );
}

export default Task;
