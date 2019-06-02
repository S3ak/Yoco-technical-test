import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

// TODO: Isolate styling for component

export default function KeypadDigit({ handleOnClick, digit }) {
  return (
    <div
      onClick={handleOnClick}
      className={`c-keypad_digit c-keypad_digit--${digit}`}
    >
      {digit}
    </div>
  );
}

KeypadDigit.propTypes = {
  handleOnClick: PropTypes.func,
  digit: PropTypes.string
};
