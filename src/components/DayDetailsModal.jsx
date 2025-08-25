import { getDaysSpent } from '../utils/getDaysSpent';

function DayDetailsModal({ isOpen, selectedDate, tasks, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="dayModal">
        <div className="modalHeader">
          <h2>Tasks for {selectedDate}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modalContent">
          {tasks.length === 0 ? (
            <p>No tasks for this day.</p>
          ) : (
            <ul className="dayModalList">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`dayTasks ${task.isCompleted ? 'complete' : ''}`}
                >
                  <div className="dayModalHeader">
                    <p className="taskModalTitle">{task.title}</p>
                    {task.isCompleted && task.completedAt && (
                      <small>Done in {getDaysSpent(task)} days</small>
                    )}
                  </div>
                  <p className="descriptionLine">Description</p>
                  {task.description && (
                    <div className="TaskModalDescription">
                      {task.description}
                    </div>
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
