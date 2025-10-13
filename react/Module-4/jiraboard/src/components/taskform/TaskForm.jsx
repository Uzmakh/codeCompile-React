import { useState } from "react";
import Tag from "../tag/Tag";
import "./taskform.css";

const TaskForm = () => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");

 
  // const handleTask = (e) => setTask(e.target.value);
  // const handleStatus = (e) => setStatus(e.target.value);

  // Alternatively, 
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready For Development",
  });
  console.log(taskData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  }
  
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          name="task"
          placeholder="Enter task details"
          onChange={handleChange}
        />

        <div className="task_form_bottom">
          <div className="tag_container">
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div className="status_add">
            <select name="status" id="" className="task_status" 
              onChange={handleChange}
            >
              <option value="Ready for development" className="value">
                Ready for development
              </option>
              <option value="In Progress" className="value">
                In Progress
              </option>
              <option value="Ready for Test" className="value">
                {" "}
                Ready for Test
              </option>
              <option value="Closed" className="value">
                Closed
              </option>
            </select>
            <button type="submit" className="task_submit">
              +Add
            </button>
          </div>
       </div>
      </form>
    </header>
  );
};

export default TaskForm;
