import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: {}
    };
  }
  componentDidMount() {
    fetch()
      .then(res => res.json())
      .then(res => {
        this.setState({ cardInfo: res });
      });
  }
  render(){
      console.log(this.state.cardInfo);
  }
}
