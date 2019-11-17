import React from "react";
import "./App.css";
import Card from "./imgs/cardback.jpg"
function App() {
  return (
    <div className="App">
      <h1>Magic: The Gathering Card Finder</h1>
    <a href="#"><img src={Card} alt="Card" className="card"/></a>
    </div>
  );
}

export default App;
