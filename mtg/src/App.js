import React from "react";
import "./App.css";
import CardBack from "./imgs/51yRqvJKSdL.svg"

function App() {
  return (
    <div className="App">
      <h1>Magic: The Gathering Card Finder</h1>
  <img src={CardBack} className="cardBack" alt="card back" />        
    </div>
  );
}

export default App;
