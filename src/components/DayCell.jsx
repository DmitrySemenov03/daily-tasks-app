import React from 'react';

function DayCell({ date, isWeekend, isToday, onDayClick }) {
  return (
    <div
      className={`calendar-cell ${isWeekend ? 'weekend' : ''} ${isToday ? 'today' : ''} ${!date ? 'empty' : ''}`}
      onClick={() => date && onDayClick()}
    >
      <div className="dateHighLight">
        {date && <p className="day-number">{date}</p>}
      </div>
    </div>
  );
}

export default DayCell;
