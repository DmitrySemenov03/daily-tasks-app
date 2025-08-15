import React from 'react';

function CalendarHeader({ monthNames, year }) {
  return (
    <div className="calendarHeader">
      <h3>
        {monthNames} {year} года
      </h3>
    </div>
  );
}

export default CalendarHeader;
