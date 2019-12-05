import React from "react";
import "../css/AddItem.css";

const AddItem = props => {
  return (
    <form onSubmit={props.handleAddItem}>
      <input
        type="text"
        value={props.placeholder.itemName}
        placeholder="Enter your item here"
        onChange={props.handleInputChange}
        className="additem-input"
      />
      <button type="submit" className="additem-add-btn">
        Add
      </button>
    </form>
  );
};

export default AddItem;
