export function updateOverdueTasks(tasks) {
  const today = new Date().toISOString().split('T')[0];

  return tasks.map((task) => {
    if (!task.isCompleted && task.dueDate < today) {
      return { ...tasks, dueDate: today };
    }
    return tasks;
  });
}
