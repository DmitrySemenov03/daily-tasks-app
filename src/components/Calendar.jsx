import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

function Calendar({ selectedDate }) {
  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Март',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  return (
    <>
      <CalendarHeader monthNames={monthNames[month + 1]} year={year} />
      <CalendarGrid year={year} month={month} />
    </>
  );
}

export default Calendar;
