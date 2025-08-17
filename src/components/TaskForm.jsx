import React, { useState } from 'react';

function TaskForm({ onAddTask, selectedDate, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Enter task title!');
      return;
    }
    setError('');

    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString().split('T')[0],
      dueDate: selectedDate || new Date().toISOString().split('T')[0],
      isCompleted: false,
      completedAt: null,
    };
    onAddTask(newTask);

    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <div className="taskForm">
      <form className="form" onSubmit={handleCreate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="taskInput"
        />
        {error && <p className="emptyTitleError">{error}</p>}
        <textarea
          rows={5}
          style={{ resize: 'none' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="taskDescription"
        />
        <button type="submit">Create</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
