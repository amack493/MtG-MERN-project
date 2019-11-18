import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Form from "./forms";
function App() {
  return (
    <div className="App">
      <h1>Magic: The Gathering Card Finder</h1>
      <Home></Home>
      <Form></Form>
    </div>
  );
}

export default App;
