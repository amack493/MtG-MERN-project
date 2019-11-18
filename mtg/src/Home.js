import React, { Component } from "react";
import Card from "./imgs/cardback.jpg";

class Home extends Component {
  render() {
    return (
      <div>
          <img src={Card} alt="Card" className="card" />
      </div>
    );
  }
}
export default Home;