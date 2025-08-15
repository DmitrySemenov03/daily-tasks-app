import React, { useState } from 'react';

function TaskForm({ onAddTask, selectedDate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleCreate() {
    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: selectedDate,
      isCompleted: false,
    };
    onAddTask(newTask);

    setTitle('');
    setDescription('');
  }

  return (
    <div className="taskForm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="taskInput"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default TaskForm;
