import React from 'react';

function TaskItem({ task, onToggleComplete, deleteTask }) {
  const { title, description, createdAt, isCompleted } = task;

  function getDaysSpent(task) {
    const start = new Date(task.createdAt);
    const end = new Date(task.completedAt || new Date());
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff;
  }

  return (
    <li className={`task ${isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleComplete(task.id)}
      />
      <span>{title}</span>
      <p>{description}</p>
      <p className="taskDate">{createdAt}</p>
      <button className="deleteTask" onClick={() => deleteTask(task.id)}>
        del
      </button>
      {task.isCompleted && (
        <span className="days-spent">Done in {getDaysSpent(task)} days</span>
      )}
    </li>
  );
}

export default TaskItem;
