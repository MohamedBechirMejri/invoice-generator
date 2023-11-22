export function formatDateStringMDY(inputDate: string): string {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  // Parse the date
  const date = new Date(inputDate);

  // Extract the day, month, and year
  const day = date.getDate(); // day of the month
  const month = months[date.getMonth()]; // month (from the months array)
  const year = date.getFullYear(); // year

  // Format the date as "MONTH DAY, YEAR"
  return `${month} ${day}, ${year}`;
}
