import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

function Calendar({
  selectedDate,
  onDayClick,
  isDayModalOpen,
  dailyTasks,
  onDayModalClose,
}) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <>
      <CalendarHeader monthNames={monthNames[month]} year={year} />
      <CalendarGrid
        year={year}
        month={month}
        dayNames={dayNames}
        onDayClick={onDayClick}
        isDayModalOpen={isDayModalOpen}
        dailyTasks={dailyTasks}
        onDayModalClose={onDayModalClose}
        selectedDate={selectedDate}
      />
    </>
  );
}

export default Calendar;
