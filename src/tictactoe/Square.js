import React from "react";
import "./styles.css";
export default function Square(props) {
  return (
    <button
      style={{ width: 45, height: 45 }}
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
