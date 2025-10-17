import TaskCard from "../taskcard/TaskCard";
import "./taskcolumn.css";

const TaskColumn = ({ title, tasks, status, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" />
        {title}
      </h2>
      {tasks.map((task, index) => {
        return (
          task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} />
        )
      
      })
      }
    </section>
  );
};

export default TaskColumn;
