import React from "react";
import "./TaskFilter.scss";

const TaskFilter = ({ setFilter }) => (
  <div className="task-filter">
    <button onClick={() => setFilter("all")}>All</button>
    <button onClick={() => setFilter("completed")}>Completed</button>
    <button onClick={() => setFilter("uncompleted")}>Uncompleted</button>
  </div>
);

export default TaskFilter;
