import { useState } from "react";
import PropTypes from "prop-types";
import "./taskForm.css";

let nextTaskId = 0;

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask(event) {
    event.preventDefault();
    const trimmedTask = newTask.trim();
    if (trimmedTask !== "") {
      const task = {
        id: nextTaskId++,
        name: trimmedTask,
        completed: false,
      };
      addTask(task);
      setNewTask("");
    } else {
      alert("Por favor, ingrese una tarea válida.");
    }
  }

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Ingrese una nueva tarea"
      />
      <button type="submit">AGREGAR</button>
    </form>
  );
}

export default TaskForm;
