import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="emptyList">Oops, it&apos;s empty!</p>;
  }

  return (
    <ul className="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
