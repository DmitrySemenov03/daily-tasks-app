import React from 'react';

function DayCell({ date, isWeekend, isToday }) {
  return (
    <div
      className={`calendar-cell ${isWeekend ? 'weekend' : ''} ${isToday ? 'today' : ''} ${!date ? 'empty' : ''}`}
    >
      {date && <span className="day-number">{date}</span>}
    </div>
  );
}

export default DayCell;
