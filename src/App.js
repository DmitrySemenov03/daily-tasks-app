import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import { updateOverdueTasks } from './utils/updateOverdueTasks';
import { createTask } from './models/task';

function App() {
  const today = new Date().toISOString().split('T')[0];

  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [dayModal, setDayModal] = useState(false);

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

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  function handleDayClick(date) {
    setSelectedDate(date);
    setDayModal(true);
  }

  return (
    <>
      <Header />
      <MainLayout
        tasks={tasks}
        onAddTask={addTask}
        selectedDate={selectedDate}
        onDayClick={handleDayClick}
        onToggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
