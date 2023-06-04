import React from "react";
import Task from "./Task.js"
import { v4 as uuid } from "uuid";

function TaskList({tasks, onTaskDelete}) {
  


  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key= {uuid()} task= {task.text} category= {task.category} onTaskDelete={onTaskDelete}/>
      )) }
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
