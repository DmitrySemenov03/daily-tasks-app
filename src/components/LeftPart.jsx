import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function LeftPart({ tasks, onAddTask, selectedDate, onToggleComplete }) {
  return (
    <div className="leftPart">
      <p className="taskListTitle">Your tasks</p>
      <TaskForm onAddTask={onAddTask} selectedDate={selectedDate} />
      <TaskList tasks={tasks} onToggleComplete={onToggleComplete} />
    </div>
  );
}

export default LeftPart;
