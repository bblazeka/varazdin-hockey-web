/**
 * Format a date with Croatian day names
 * @param date - The date to format
 * @param time - The time string (e.g., "20:00")
 * @returns Formatted string like "Subota, 20:00"
 */
export function formatDate(date: Date, time: string): string {
  const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
  const dayName = days[date.getDay()];
  return `${dayName}, ${time}`;
}

/**
 * Format a full date with Croatian day and month names
 * @param date - The date to format
 * @returns Formatted string like "Subota, 15. siječnja 2025."
 */
export function formatFullDate(date: Date): string {
  const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
  const months = [
    'siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja',
    'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca'
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${day}. ${month} ${year}.`;
}
