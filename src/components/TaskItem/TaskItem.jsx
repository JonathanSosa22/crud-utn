import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./taskItem.css";

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function TaskItem({ task, onToggleCompleted, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  useEffect(() => {
    setIsCompleted(task.completed);
  }, [task]);

  const handleToggleCompleted = () => {
    setIsCompleted(!isCompleted);
    onToggleCompleted(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="containerItem">
      <input
        className="completed"
        type="checkbox"
        checked={isCompleted}
        onChange={handleToggleCompleted}
      />
      <span
        className="text"
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button className="button" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default TaskItem;
