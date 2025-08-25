import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function LeftPart({
  tasks,
  onAddTask,
  selectedDate,
  onToggleComplete,
  onDeleteTask,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <div className="leftPart">
      <div className="taskListTitle">
        <h4>Your Tasks</h4>
      </div>
      <div className="taskListMain">
        <button className="addTask" onClick={handleToggleForm}>
          Add a Task
        </button>
        {isFormOpen && (
          <TaskForm
            onAddTask={onAddTask}
            selectedDate={selectedDate}
            onClose={() => setIsFormOpen(false)}
          />
        )}
        <TaskList
          tasks={tasks}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default LeftPart;
