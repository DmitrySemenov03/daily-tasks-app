import React from 'react';
import DayCell from './DayCell';
import { generateCalendar } from '../utils/generateCalendar';
import DayDetailsModal from './DayDetailsModal';
import CalendarDaysRow from './CalendarDaysRow';

function CalendarGrid({
  year,
  month,
  dayNames,
  onDayClick,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
  selectedDate,
}) {
  const calendarDays = generateCalendar(year, month);

  return (
    <div className="calendar">
      <div className="days-grid">
        {dayNames.map((day, index) => {
          return <CalendarDaysRow key={index} day={day} />;
        })}
      </div>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <DayCell
            key={index}
            date={day.date}
            isWeekend={day.isWeekend}
            isToday={day.isToday}
            onDayClick={() => {
              if (day.date) {
                const clickedDate = new Date(Date.UTC(year, month, day.date))
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
        selectedDate={selectedDate}
        tasks={dailyTasks}
        onClose={onDayModalClose}
      />
    </div>
  );
}

export default CalendarGrid;
