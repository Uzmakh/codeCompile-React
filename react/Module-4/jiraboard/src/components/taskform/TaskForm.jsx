import { useState } from "react";
import Tag from "../tag/Tag";
import "./taskform.css";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };

  // * Logic for selected tags in tags-array
  const selectedTag = (tag) => {
    setTaskData((prev) => {
      const isSelected = prev.tags.includes(tag);
      const tags = isSelected
        ? prev.tags.filter((item) => item != tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  };
  //  console.log(taskData);

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
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div className="status_add">
            <select
              name="status"
              id=""
              className="task_status"
              onChange={handleChange}
            >
              <option value="Ready for development" className="value">
                Ready for development
              </option>
              <option value="In Progress" className="value">
                In Progress
              </option>
              <option value="Ready for Test" className="value">
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
