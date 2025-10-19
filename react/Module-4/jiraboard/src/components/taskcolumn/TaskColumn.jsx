import TaskCard from "../taskcard/TaskCard";
import "./taskcolumn.css";

const TaskColumn = ({ heading, tasks, status, icon ,handleDelete}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" />
        {heading}
      </h2>
      {tasks.map((task, taskIndex) => {
        return (
          task.status === status && <TaskCard key={taskIndex} title={task.task} tags={task.tags} handleDelete={handleDelete} index={taskIndex} />
        )
      
      })
      }
    </section>
  );
};

export default TaskColumn;
