import TaskCard from "../taskcard/TaskCard";
import "./taskcolumn.css";

const TaskColumn = (props) => {
  const { heading, icon } = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="" className="task_column_icon" />
        {heading}
        </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
