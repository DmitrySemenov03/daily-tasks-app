import React from 'react';

function TaskItem({ task, onToggleComplete }) {
  const { title, description, createdAt, isCompleted } = task;
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
    </li>
  );
}

export default TaskItem;
