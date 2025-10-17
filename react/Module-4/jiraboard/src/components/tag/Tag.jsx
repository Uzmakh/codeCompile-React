import { tagStyles, tagKeyMap } from "../../constants/common.js";
import "./tag.css";

const Tag = (props) => {
  // console.log(props);
  const { tagName, selectedTag, selected } = props;

  const key = tagKeyMap[tagName];
  return (
    <div className="tag-container">
      <button
        type="button"
        className="tag"
        style={selected ? tagStyles[key] : {}}
        onClick={() => selectedTag(tagName)}
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
