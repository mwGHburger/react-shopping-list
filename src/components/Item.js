import React, { useState } from "react";

const Item = props => {
  const [count, setCount] = useState(props.likeCount);

  const handleIncrementLike = () => {
    console.log("run incremement function");
    setCount(count + 1);
  };
  return (
    <div>
      <h1>
        {props.itemName} {count}
      </h1>
      <button onClick={handleIncrementLike}>like</button>
      <button onClick={() => props.handleDeleteItem(props.id)}>Delete</button>
    </div>
  );
};

export default Item;
