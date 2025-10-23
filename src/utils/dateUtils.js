import { format, parseISO } from "date-fns";
import { hr } from "date-fns/locale";

/**
 * Format a date in a human-readable format
 * @param {Date|string} date The date to format
 * @param {string} formatStr The format string (default: 'd. MMMM yyyy.')
 * @returns {string} The formatted date
 */
export function formatDate(date, formatStr = "d. MMMM yyyy.") {
  if (!date) return "";

  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return format(dateObj, formatStr, { locale: hr });
}

/**
 * Check if a date is in the future
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the future
 */
export function isFutureDate(date) {
  if (!date) return false;

  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return dateObj > new Date();
}

/**
 * Check if a date is in the past
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the past
 */
export function isPastDate(date) {
  if (!date) return false;

  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;

  return dateObj < new Date();
}