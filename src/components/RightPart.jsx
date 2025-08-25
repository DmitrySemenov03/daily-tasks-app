import React from 'react';
import Calendar from './Calendar';

function RightPart({
  onDayClick,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
  tasks,
  selectedDate,
}) {
  return (
    <div className="rightPart">
      <Calendar
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

export default RightPart;
