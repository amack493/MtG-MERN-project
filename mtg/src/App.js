import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Link to="/">
      <h1>Magic: The Gathering Card Finder</h1>
      </Link>
      <Route path="/" component={Home}
      />
    </div>
  );
}

export default App;
