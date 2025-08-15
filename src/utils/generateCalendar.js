export function generateCalendar(year, month) {
  const today = new Date();
  const dateNow = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const startDay = firstDay === 0 ? 7 : firstDay; // Для удобства меняем ВС как 7 день календаря, а не 0-ой день.

  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;

  const days = [];

  // Пустые ячейки в начале
  for (let i = 1; i < startDay; i++) {
    days.push({ date: null, isWeekend: false, isToday: false });
  }

  // Дни месяца
  for (let date = 1; date <= daysInMonth; date++) {
    const d = new Date(year, month, date);
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isToday = isCurrentMonth && date === dateNow;

    days.push({ date, isWeekend, isToday });
  }

  return days;
}
