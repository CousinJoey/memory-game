import React from "react";
import PropTypes from "prop-types";

function WinningDisplay({ show, onPlayAgain }) {
  const winStyle = {
    display: show ? "block" : "none",
  };

  const handleClick = () => {
    onPlayAgain();
  };

  return (
    <div style={winStyle} id="winning-display">
      <div id="win-container">
        <p id="win-msg">
          You won! You clicked on all 12 images without repeating an image!
        </p>
        <button id="play-again" onClick={handleClick}>
          Play Again?
        </button>
      </div>
    </div>
  );
}

WinningDisplay.propTypes = {
  show: PropTypes.bool.isRequired,
  onPlayAgain: PropTypes.func.isRequired,
};

export default WinningDisplay;
