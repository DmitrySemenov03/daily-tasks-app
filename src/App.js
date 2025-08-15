import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainLayout from './components/MainLayout';

function App() {
  const today = new Date().toISOString().split('T')[0];
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  const toggleComplete = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      );
    });
  };

  return (
    <>
      <Header />
      <MainLayout
        tasks={tasks}
        onAddTask={addTask}
        selectedDate={selectedDate}
        onToggleComplete={toggleComplete}
      />
    </>
  );
}

export default App;
