import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { getDaysSpent } from '../utils/getDaysSpent';

function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  const { title, description, createdAt, isCompleted } = task;

  return (
    <li className={`task task-card ${isCompleted ? 'completed' : ''}`}>
      <div className="taskTitle">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggleComplete(task.id)}
        />
        <span>{title}</span>
      </div>
      <p className="taskDate">{new Date(createdAt).toLocaleDateString()}</p>
      <button className="deleteTask" onClick={() => onDeleteTask(task.id)}>
        <FaTrashCan />
      </button>
      {task.isCompleted && (
        <div className="taskDone">
          <small className="days-spent">
            Done in {getDaysSpent(task)} days
          </small>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
