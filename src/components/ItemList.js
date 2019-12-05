// import external libraries
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

// import local components
import Item from "./Item";
import AddItem from "./AddItem";

// import styling
import "../css/ItemList.css";

const ItemList = () => {
  // create state
  const [itemList, setItemList] = useState([
    {
      id: 1,
      itemName: "apple",
      likeCount: 0
    },
    {
      id: 2,
      itemName: "carrot",
      likeCount: 0
    }
  ]);

  const [placeholder, setPlaceHolder] = useState({
    id: "",
    itemName: "",
    likeCount: 0
  });

  // animations
  const transition = useTransition(itemList, items => items.id, {
    //   Mounting
    from: { opacity: 0, transform: "scaleY(0)" },
    enter: { opacity: 1, transform: "scaleY(1)" },
    // Unmounting
    leave: { opacity: 0, transform: "scaleY(0)" }
  });

  // functions
  const handleDeleteItem = itemId => {
    console.log(`delete function run of item${itemId}`);
    setItemList(itemList.filter(item => item.id !== itemId));
  };

  const handleInputChange = event => {
    console.log(Date.now());
    setPlaceHolder({
      ...placeholder,
      id: Date.now(),
      itemName: event.target.value,
      likeCount: 0
    });
  };

  const handleAddItem = event => {
    event.preventDefault();
    setItemList([...itemList, placeholder]);
  };

  return (
    <div className="shopping-list-container">
      <AddItem
        handleAddItem={handleAddItem}
        handleInputChange={handleInputChange}
        placeholder={placeholder}
      />

      {/* This syntax is particular for the react-spring useTransition hook */}
      {transition.map(({ item, key, props }) => (
        // The parent level component must have a key
        <animated.div key={key} style={props}>
          {/* I've passed another unique key to the Item component */}
          <Item
            key={item.id}
            id={item.id}
            itemName={item.itemName}
            likeCount={item.likeCount}
            handleDeleteItem={handleDeleteItem}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default ItemList;

/* The Abyss

{itemList.map(item => (
    <Item
        key={item.id}
        id={item.id}
        itemName={item.itemName}
        likeCount={item.likeCount}
        handleDeleteItem={handleDeleteItem}
    />
))} 

*/
