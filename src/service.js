const { getDiaryWithRange } = require("./repository");

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

const getDate = (date, day) =>
  new Date(date.getFullYear(), date.getMonth(), day);

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

const makeCalendarData = async (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  const firstDateStrig = formatDate(firstDate);
  const lastDateString = formatDate(lastDate);
  const diaries = await getDiaryWithRange(firstDateStrig, lastDateString);

  const startDay = firstDate.getDay();
  const daysInMonth = lastDate.getDate();

  const days = [];

  for (let i = 0; i < startDay; i++) {
    days.push({
      date: null,
      hasDiary: false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = getDate(firstDate, i);
    const dateStr = formatDate(date);
    const hasDiary = diaries.some((diary) => diary.date === dateStr);
    days.push({ date: getDate(firstDate, i), hasDiary });
  }

  for (let i = daysInMonth + 1; i <= 6; i++) {
    days.push({ date: null, hasDiary: false });
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
