export function getDaysSpent(task) {
  const start = new Date(task.createdAt);
  const end = new Date(task.completedAt || new Date());
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return diff;
}
