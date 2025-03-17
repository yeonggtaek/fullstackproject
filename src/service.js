const monthString = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDate = (date, day) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month, day);
};

const makeCalendarData = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateWeekday = date.getDay();
  const firstDate = new Date(year, month, 1);
  const nextMonthFirstDate = new Date(year, month + 1, 1);
  const days = [];

  let idx = 0;
  while (1) {
    const newDate = getDate(firstDate, idx + 1);
    if (newDate >= nextMonthFirstDate) break;
    days.push(newDate);
    idx++;
  }

  return {
    date,
    month: month + 1,
    monthString: monthString[month],
    year,
    days,
  };
};

module.exports = {
  makeCalendarData,
};
