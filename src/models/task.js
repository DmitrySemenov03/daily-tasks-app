export function createTask({ title, description, dueDate }) {
  return {
    id: Date.now(),
    title,
    description,
    createdAt: new Date().toISOString().split('T')[0],
    dueDate: dueDate || new Date().toISOString().split('T')[0],
    isCompleted: false,
    completedAt: null,
  };
}
