import React from 'react';

function DayDetailsModal({ isOpen, date, tasks, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="dayModal">
        <div className="modalHeader">
          <h2>Tasks for {date}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-content">
          {tasks.length === 0 ? (
            <p>No tasks for this day.</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`task ${task.isCompleted ? 'done' : ''}`}
                >
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                  {task.isCompleted && task.completedAt && (
                    <small>
                      Completed in{' '}
                      {Math.ceil(
                        (new Date(task.completedAt) -
                          new Date(task.createdAt)) /
                          (1000 * 60 * 60 * 24)
                      )}{' '}
                      days
                    </small>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default DayDetailsModal;
