// Calculates current streak of habit based on array of completion dates
import { wasCompletedToday, wasYesterday } from "./utils.js";

export function calculateStreak(dates) {
  // If input is not array or is empty streak is not possible
  if (!Array.isArray(dates) || dates.length === 0) return 0;

  // Converts date strings to Date objects and sorts them most recent first
  const sortedDates = dates.map((d) => new Date(d)).sort((a, b) => b - a);
  let currentStreak = 0;
  let lastDate = new Date();

  // Checks most recent date to see if it's today or yesterday
  if (wasCompletedToday(sortedDates[0])) {
    currentStreak = 1;
    lastDate = sortedDates[0];
  } else if (wasYesterday(sortedDates[0])) {
    currentStreak = 1;
    lastDate = sortedDates[0];
  } else {
    // If most recent completion was not today or yesterday streak is broken
    return 0;
  }

  // Loops through rest of sorted dates to find daily streak
  for (let i = 1; i < sortedDates.length; i++) {
    // Calculates date of day before last verified date
    const expectedPreviousDay = new Date(lastDate);
    expectedPreviousDay.setDate(expectedPreviousDay.getDate() - 1);

    // If current date in loop matches expected previous day streak continues (not yet :D I think)
    if (sortedDates[i].toDateString() === expectedPreviousDay.toDateString()) {
      currentStreak++;
      lastDate = sortedDates[i];
    } else {
      break;
    }
  }
  // Returns final calculated streak
  return currentStreak;
}
