// import external libraries
import React from "react";

// import local components
import ItemList from "./components/ItemList";

// import styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // inline styling
  const inlineStyling = {
    color: "rgb(100,100,100)"
  };

  return (
    <div className="app-container">
      <h1 style={inlineStyling}>My Shopping List</h1>
      <ItemList />
    </div>
  );
}

export default App;
