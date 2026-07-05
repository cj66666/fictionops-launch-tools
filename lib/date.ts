const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function addDays(dateValue: string, days: number) {
  const date = dateValue ? new Date(`${dateValue}T12:00:00`) : new Date();
  date.setTime(date.getTime() + days * MS_PER_DAY);
  return date.toISOString().slice(0, 10);
}

export function dayLabel(offset: number) {
  if (offset === 0) return "Day 0";
  return offset > 0 ? `Day +${offset}` : `Day ${offset}`;
}
