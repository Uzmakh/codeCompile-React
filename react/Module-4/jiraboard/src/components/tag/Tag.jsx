import "./tag.css";

const Tag = (props) => {
  // console.log(props);
  const { tagName } = props;
  return (
    <div className="tag-container">
      <button className="tag">{tagName}</button>
    </div>
  );
};

export default Tag;
