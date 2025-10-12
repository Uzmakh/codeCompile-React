import TaskForm from "./components/taskform/TaskForm";
import './App.css'
import TaskColumn from "./components/taskcolumn/TaskColumn";
import checkmarkIcon from './assets/checkmark.png'

const App = () => {
  return (
    <div className="app">
      <h1 style={{textAlign:"center",marginTop:"50px",textDecoration:"underline"}}>Jira Board</h1>
     <TaskForm/>
      <main className="app_main">
       <TaskColumn heading="Ready For Development"/>
        <TaskColumn heading="In Progress" />
        <TaskColumn heading=" Ready for Test" />
        <TaskColumn heading="Closed" icon={checkmarkIcon} />
      </main>
    </div>
  );
};

export default App;


