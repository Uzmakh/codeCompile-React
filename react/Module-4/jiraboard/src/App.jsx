import { useState } from "react";
import TaskForm from "./components/taskform/TaskForm";
import TaskColumn from "./components/taskcolumn/TaskColumn";
import checkmarkIcon from "./assets/checkmark.png";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  const handleDelete = (taskIndex) => {
    const existingTasks = tasks.filter((task, index) => index != taskIndex);
    setTasks(existingTasks);
  };
  return (
    <div className="app">
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          textDecoration: "underline",
        }}
      >
        Jira Board
      </h1>
      {/* it contains header */}
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        <TaskColumn
          heading="Ready For Development"
          tasks={tasks}
          status="Ready for Development"
          handleDelete={handleDelete}
        />
        <TaskColumn
          heading="In Progress"
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
        />
        <TaskColumn
          heading="Ready for Test"
          tasks={tasks}
          status="Ready for Test"
          handleDelete={handleDelete}
        />
        <TaskColumn
          heading="Closed"
          icon={checkmarkIcon}
          tasks={tasks}
          status="Closed"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
