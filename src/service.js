const monthString = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const getDate = (date, day) => new Date(date.getFullYear(), date.getMonth(), day);

const makeCalendarData = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);

  const startDay = firstDate.getDay(); 
  const daysInMonth = lastDate.getDate(); 

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(getDate(firstDate, i));
  }

  return {
    date,
    month: month + 1,
    monthString: monthString[month],
    year,
    days, 
  };
};

module.exports = { makeCalendarData };
