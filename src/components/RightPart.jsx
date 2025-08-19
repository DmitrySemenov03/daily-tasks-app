import React from 'react';
import Calendar from './Calendar';

function RightPart({
  onDayClick,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
}) {
  return (
    <div className="rightPart">
      <Calendar
        onDayClick={onDayClick}
        isDayModalOpen={isDayModalOpen}
        dailyTasks={dailyTasks}
        onDayModalClose={onDayModalClose}
      />
    </div>
  );
}

export default RightPart;
