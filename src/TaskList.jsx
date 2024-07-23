import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    ))}
  </ul>
);

export default TaskList;
