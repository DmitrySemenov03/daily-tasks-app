import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p className="emptyList">Задач нет</p>;
  }

  return (
    <ul className="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
