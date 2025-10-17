import { useState } from "react";
import TaskForm from "./components/taskform/TaskForm";
import TaskColumn from './components/taskcolumn/TaskColumn';
import checkmarkIcon from './assets/checkmark.png'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", marginTop: "50px", textDecoration: "underline" }}>Jira Board</h1>
      
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
       <TaskColumn title="Ready For Development" tasks={tasks} status="Ready for Development"/>
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" />
        <TaskColumn title=" Ready for Test" tasks={tasks} status="Ready for Test" />
        <TaskColumn title="Closed" icon={checkmarkIcon} tasks={tasks} status="Closed" />
      </main>
    </div>
  );
};

export default App;


