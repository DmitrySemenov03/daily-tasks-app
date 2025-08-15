import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

function MainLayout({ tasks, onAddTask, selectedDate, onToggleComplete }) {
  return (
    <div className="main">
      <LeftPart
        tasks={tasks}
        onAddTask={onAddTask}
        selectedDate={selectedDate}
        onToggleComplete={onToggleComplete}
      />
      <RightPart />
    </div>
  );
}

export default MainLayout;
