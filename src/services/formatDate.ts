export function getMonthAndDay(date: string) {
  const newDate = new Date(date);
  return newDate.toDateString().split(' ').slice(1, 3).join(' ');
}

export function getFulllDate(date: string) {
  const newDate = new Date(date);
  return newDate.toDateString();
}
