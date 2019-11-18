import React, { Component } from "react";
import Card from "./imgs/cardback.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <a href="/page2">
          <img src={Card} alt="Card" className="card" />
        </a>
      </div>
    );
  }
}
export default Home;