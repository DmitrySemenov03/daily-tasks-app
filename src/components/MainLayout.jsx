import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

function MainLayout({
  tasks,
  onAddTask,
  selectedDate,
  onDayClick,
  onToggleComplete,
  deleteTask,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
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
      <RightPart
        onDayClick={onDayClick}
        isDayModalOpen={isDayModalOpen}
        dailyTasks={dailyTasks}
        onDayModalClose={onDayModalClose}
      />
    </div>
  );
}

export default MainLayout;
