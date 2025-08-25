import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

function MainLayout({
  tasks,
  onAddTask,
  selectedDate,
  onDayClick,
  onToggleComplete,
  onDeleteTask,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
}) {
  return (
    <div className="main">
      <LeftPart
        tasks={tasks}
        selectedDate={selectedDate}
        onAddTask={onAddTask}
        onToggleComplete={onToggleComplete}
        onDeleteTask={onDeleteTask}
      />

      <RightPart
        tasks={tasks}
        selectedDate={selectedDate}
        onDayClick={onDayClick}
        isDayModalOpen={isDayModalOpen}
        dailyTasks={dailyTasks}
        onDayModalClose={onDayModalClose}
      />
    </div>
  );
}

export default MainLayout;
