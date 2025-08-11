export function wasCompletedToday(dateString) {
  if (!dateString) return false;
  return new Date(dateString).toDateString() === new Date().toDateString();
}

export function wasYesterday(dateString) {
  if (!dateString) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return new Date(dateString).toDateString() === yesterday.toDateString();
}
