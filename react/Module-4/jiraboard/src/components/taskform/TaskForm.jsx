import Tag from "../tag/Tag";
import "./taskform.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter task details"
        />

        <div className="task_form_bottom">
          <div className="tag_container">
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div className="status_add">
            <select name="" id="" className="task_status">
              <option value="  Ready for development" className="value">
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
