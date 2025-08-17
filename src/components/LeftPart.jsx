import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function LeftPart({
  tasks,
  onAddTask,
  selectedDate,
  onToggleComplete,
  deleteTask,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <div className="leftPart">
      <div className="taskListTitle">
        <p>Your Tasks</p>
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
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default LeftPart;
