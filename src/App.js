import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import "./App.scss";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc"); // Состояние для сортировки

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "uncompleted") {
      return !task.completed;
    }
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return new Date(b.dueDate) - new Date(a.dueDate);
    }
  });

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskFilter setFilter={setFilter} />
      <button onClick={toggleSortOrder}>
        Sort by Date {sortOrder === "asc" ? "Descending" : "Ascending"}
      </button>
      <TaskList
        tasks={sortedTasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
