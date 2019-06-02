import React from "react";
import "./App.scss";

import CurrencySymbol from "./components/CurrencySymbol/index";

function App() {
  return (
    <div className="l-app">
      <article className="l-app_col--first">
        <div className="c-cal">
          <div className="c-cal_display">
            <CurrencySymbol />
            <div className="c-display_value">0.00</div>
          </div>

          <div className="c-cal_keypad">
            <div className="c-keypad_digit c-keypad_digit--1">1</div>
            <div className="c-keypad_digit c-keypad_digit--2">2</div>
            <div className="c-keypad_digit c-keypad_digit--3">3</div>
            <div className="c-keypad_digit c-keypad_digit--4">4</div>
            <div className="c-keypad_digit c-keypad_digit--5">5</div>
            <div className="c-keypad_digit c-keypad_digit--6">6</div>
            <div className="c-keypad_digit c-keypad_digit--7">7</div>
            <div className="c-keypad_digit c-keypad_digit--8">8</div>
            <div className="c-keypad_digit c-keypad_digit--9">9</div>
            <div className="c-keypad_digit c-keypad_digit--cancel">❌</div>
            <div className="c-keypad_digit c-keypad_digit--0">0</div>
            <div className="c-keypad_digit c-keypad_digit--accept">✅</div>
          </div>
        </div>
      </article>

      <div className="l-app_col--last c-charge-list">
        <div className="c-charge-section_container">
          <ul className="c-charge-section_list">
            <li>
              <CurrencySymbol />
              <span>1.23</span>
            </li>
            <li>
              <CurrencySymbol />
              <span>4.56</span>
            </li>
            <li>
              <CurrencySymbol />
              <span>7.89</span>
            </li>
          </ul>

          <div className="c-charge-section_divider" />

          <div className="c-charge-section_total">
            <CurrencySymbol />
            <span className="a-amount">13.68</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
