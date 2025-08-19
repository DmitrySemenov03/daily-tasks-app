import React from 'react';
import DayCell from './DayCell';
import { generateCalendar } from '../utils/generateCalendar';
import DayDetailsModal from './DayDetailsModal';

function CalendarGrid({
  year,
  month,
  onDayClick,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
  selectedDate,
}) {
  const calendarDays = generateCalendar(year, month);
  return (
    <>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <DayCell
            key={index}
            date={day.date}
            isWeekend={day.isWeekend}
            isToday={day.isToday}
            onDayClick={() => {
              if (day.date) {
                const clickedDate = new Date(year, month, day.date)
                  .toISOString()
                  .split('T')[0];
                onDayClick(clickedDate);
              }
            }}
          />
        ))}
      </div>
      <DayDetailsModal
        isOpen={isDayModalOpen}
        date={selectedDate}
        tasks={dailyTasks}
        onClose={onDayModalClose}
      />
    </>
  );
}

export default CalendarGrid;
