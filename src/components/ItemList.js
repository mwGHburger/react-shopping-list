// import external libraries
import React, { useState } from "react";

// import local components
import Item from "./Item";
import AddItem from "./AddItem";

// import styling
import "../css/ItemList.css";

const ItemList = () => {
  // create state
  const [itemlist, setItemList] = useState([
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

  const handleDeleteItem = itemId => {
    console.log(`delete function run of item${itemId}`);
    setItemList(itemlist.filter(item => item.id !== itemId));
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
    setItemList([...itemlist, placeholder]);
  };

  return (
    <div className="shopping-list-container">
      <AddItem
        handleAddItem={handleAddItem}
        handleInputChange={handleInputChange}
        placeholder={placeholder}
      />
      {itemlist.map(item => (
        <Item
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          likeCount={item.likeCount}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
