import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card-item" onClick={props.onClick}>
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "200px", height: "200px" }}
      />
      <p>{props.title}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
