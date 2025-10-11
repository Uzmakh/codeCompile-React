import Tag from "../tag/Tag";
import deleteIcon from "../../assets/trash-icon.jpg";
import "./taskcard.css";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is sample task.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="DEV" />
          <Tag tagName="QA" />
        </div>

        <div className="task_delete">
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
