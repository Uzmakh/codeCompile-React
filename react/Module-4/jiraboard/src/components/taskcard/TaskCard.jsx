import Tag from "../tag/Tag";
import deleteIcon from "../../assets/trash-icon.jpg";
import "./taskcard.css";

const TaskCard = ({ title, tags, handleDelete,index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tagName={tag} selected />;
          })}
        </div>
        <div className="task_delete" onClick={() => { handleDelete(index) }}>
          <img src={deleteIcon} alt="" className="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
