import React from 'react';

function DayCell({ date, isWeekend, isToday }) {
  return (
    <div
      className={`calendar-cell ${isWeekend ? 'weekend' : ''} ${isToday ? 'today' : ''} ${!date ? 'empty' : ''}`}
    >
      <div className="dateHighLight">
        {date && <p className="day-number">{date}</p>}
      </div>
    </div>
  );
}

export default DayCell;
