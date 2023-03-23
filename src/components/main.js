import React, { Component } from "react";
import CardGrid from "./gameComponets/cardGrid";
import "../style.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CardGrid />
      </div>
    );
  }
}

export default Main;
