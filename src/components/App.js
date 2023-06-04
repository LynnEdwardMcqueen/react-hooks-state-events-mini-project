import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

let previousButton
function App() {
  // Since you can add and delete tasks, make it a state variable so rendering automatically occurs.
  const [tasks, updateTasks] = useState(TASKS)
 
  function handleDeletedTasks(taskText) {


    updateTasks(tasks.filter((task) => task.text !== taskText))
  }

  // Because you can select the category to display, make it a state variable so re-rendering occurs as new categories are chosen.
  const [selectedCategory, updateCategory] = useState("All")

  function handleCategoryChange(event) {

    event.target.className = "selected"
    if (previousButton !== undefined) {
      previousButton.className = ""
    }
    previousButton = event.target
    
    updateCategory(event.target.value)
  }

  function handleNewTask(newTask) {
    updateTasks([...tasks, newTask])
  }

  return (
  
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryList = {CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categoryList = {CATEGORIES} onTaskFormSubmit = {handleNewTask} />
      <TaskList tasks= {tasks.filter((task) => ((task.category === selectedCategory) || (selectedCategory === "All" )) )} onTaskDelete= {handleDeletedTasks} /> 

    </div>
  );
}

export default App;
