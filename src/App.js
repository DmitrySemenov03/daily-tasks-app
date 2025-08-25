import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import { updateOverdueTasks } from './utils/updateOverdueTasks';
import { createTask } from './models/task';

function App() {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [tasks, setTasks] = useState([]);
  const [isDayModalOpen, setIsDayModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // синхронизация с локалкой при изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const updated = updateOverdueTasks(tasks);
    if (JSON.stringify(updated) !== JSON.stringify(tasks)) {
      setTasks(updated);
      localStorage.setItem('tasks', JSON.stringify(updated));
    }
  }, []);

  // Добавление задачи
  function addTask(taskData) {
    const newTask = createTask(taskData);
    setTasks((prev) => [...prev, newTask]);
  }

  // Флаг выполнения задачи
  const toggleComplete = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
              completedAt: !task.isCompleted
                ? new Date().toISOString().split('T')[0]
                : null,
            }
          : task
      );
    });
  };

  const onDeleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  function handleDayClick(date) {
    setSelectedDate(date);
    setIsDayModalOpen(true);
  }
  // Фильтрация задач по дате
  const tasksForSelectedDate = tasks.filter(
    (task) => task.createdAt === selectedDate
  );

  const handleDayModalClose = () => setIsDayModalOpen(false);

  return (
    <>
      <Header />
      <MainLayout
        tasks={tasks}
        onAddTask={addTask}
        selectedDate={selectedDate}
        onDayClick={handleDayClick}
        onToggleComplete={toggleComplete}
        onDeleteTask={onDeleteTask}
        isDayModalOpen={isDayModalOpen}
        dailyTasks={tasksForSelectedDate}
        onDayModalClose={handleDayModalClose}
      />
    </>
  );
}

export default App;
