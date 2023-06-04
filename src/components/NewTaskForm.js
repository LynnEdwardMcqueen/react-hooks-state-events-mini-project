import React, {useState} from "react";

function NewTaskForm({categoryList, onTaskFormSubmit}) {
  const [newCategory, setNewCategory] = useState("")
  const [newTask, setNewTask] = useState("")

  function handleNewCategory( event ) {
    setNewCategory( event.target.value )
  }

  function handleNewTask( event ) {
    setNewTask( event.target.value )
  }

  function handleSubmit( event ) {
    event.preventDefault()
    onTaskFormSubmit({text: newTask, category: newCategory})
  }
  let adjustedCategoryList = categoryList.filter( (category) => category !== "All")
  return (
    <form className="new-task-form" onSubmit= {handleSubmit } >
      <label>
        Details
        <input type="text" name="text" onChange= {handleNewTask} />
      </label>
      <label>
        Category
        <select name="category" onChange = {handleNewCategory} >
          {adjustedCategoryList.map((category) =>  <option key = {category} value= {category} onChange= {handleNewCategory}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form >
  );
}

export default NewTaskForm;
