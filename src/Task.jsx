import React, { useState } from "react";
import "./Task.scss";

const Task = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      editTask(task.id, updatedTask);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.dueDate}</p>
          <p>{task.completed ? "Completed" : "Uncompleted"}</p>
        </>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
};

export default Task;
