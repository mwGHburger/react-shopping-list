import React, { useState } from "react";
import "../css/Item.css";

const Item = props => {
  const [count, setCount] = useState(props.likeCount);

  const handleIncrementLike = () => {
    console.log("run incremement function");
    setCount(count + 1);
  };
  return (
    <div className="item">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p>{props.itemName}</p>
        <div className="item-thumbs-up">
          <i className="far fa-thumbs-up"></i>
          {count}
        </div>
      </div>
      <div className="text-right">
        <button className="item-like-btn" onClick={handleIncrementLike}>
          Like
        </button>
        <button
          className="item-delete-btn"
          onClick={() => props.handleDeleteItem(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
