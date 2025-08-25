import { useState } from 'react';

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

    const taskData = {
      title,
      description,
      dueDate: selectedDate || new Date().toISOString().split('T')[0],
    };
    onAddTask(taskData);

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
        <div className="buttons">
          <button className="create btn" type="submit">
            Create
          </button>
          <button className="cancel btn" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
