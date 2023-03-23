import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer-container">
        <div id="rules-container">
          <p id="rules">
            How to play: Start by clicking on a fruit, gain score by clicking on
            a unique fruit each time. If you click on the same fruit twice, you
            lose. Think you can remeber what fruit you picked and beat the game
            by scoring twelve points?
          </p>
        </div>
        <p>Copyright © CousinJoey</p>
      </div>
    );
  }
}

export default Footer;
