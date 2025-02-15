import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)

  function handleCategorySelect(category) {
    setSelectedCategory(category)
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
    // adding new tasks to list
    
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onselectCategory={handleCategorySelect}
      />

      <NewTaskForm 
      categories= {CATEGORIES}
      onTaskFormSubmit= {handleTaskFormSubmit}/>

      <TaskList tasks={tasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
