import React from 'react';
import DayCell from './DayCell';
import { generateCalendar } from '../utils/generateCalendar';

function CalendarGrid({ year, month }) {
  const calendarDays = generateCalendar(year, month);
  return (
    <div className="calendar-grid">
      {calendarDays.map((day, index) => (
        <DayCell
          key={index}
          date={day.date}
          isWeekend={day.isWeekend}
          isToday={day.isToday}
        />

        // <div
        //   key={index}
        //   className={`calendar-cell ${day.isWeekend ? 'weekend' : ''} ${day.isToday ? 'today' : ''}`}
        // >
        //   {day.date || ''}
        // </div>
      ))}
    </div>
  );
}

export default CalendarGrid;
