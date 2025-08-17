import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

function MainLayout({
  tasks,
  onAddTask,
  selectedDate,
  onToggleComplete,
  deleteTask,
}) {
  return (
    <div className="main">
      <LeftPart
        tasks={tasks}
        onAddTask={onAddTask}
        selectedDate={selectedDate}
        onToggleComplete={onToggleComplete}
        deleteTask={deleteTask}
      />
      <RightPart />
    </div>
  );
}

export default MainLayout;
