import React from "react";
import "./App.scss";

import CurrencySymbol from "./components/CurrencySymbol/index";

const { useState, useEffect } = React;

const mockEntries = [1.23, 4.56, 7.89];

// TODO: needs to be an array of Entry objects
// const mockEntry = {
//   id: 1,
//   val: 1.23,
// }

function getSum(total, num) {
  return total + Math.round(num);
}

function App() {
  const [currentVal, setCurrentVal] = useState("0.00");
  const [chargeEntries, setChargeEntries] = useState(mockEntries);
  const [totalEntriesVal, setTotalEntriesVal] = useState();

  const handleAddNewEntry = () => {
    setChargeEntries(prevVal => [...prevVal, parseFloat(currentVal)]);
    setCurrentVal("0.00");
  };

  const handleKeypadEntry = e => {
    if (!e || !e.target.innerText) {
      return;
    }

    const digit = e.target.innerText.toString();

    return !currentVal || currentVal === "0.00"
      ? setCurrentVal(digit)
      : setCurrentVal(currentVal + digit);
  };

  const handleRemoveLastKeypadEnty = () => {
    setCurrentVal(prevVal => {
      return prevVal.toString().slice(0, -1);
    });
  };

  useEffect(() => {
    if (chargeEntries) {
      setTotalEntriesVal(chargeEntries.reduce(getSum, 0));
    }
  }, [chargeEntries]);

  return (
    <div className="l-app">
      <article className="l-app_col--first">
        <div className="c-cal">
          <div className="c-cal_display">
            <CurrencySymbol />
            <div className="c-display_value">{currentVal}</div>
          </div>

          <div className="c-cal_keypad">
            <div
              onClick={handleKeypadEntry}
              name="1"
              className="c-keypad_digit c-keypad_digit--1"
            >
              1
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--2"
            >
              2
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--3"
            >
              3
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--4"
            >
              4
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--5"
            >
              5
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--6"
            >
              6
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--7"
            >
              7
            </div>
            <div
              onClick={handleKeypadEntry}
              className="c-keypad_digit c-keypad_digit--8"
            >
              8
            </div>
            <div
              onClick={handleKeypadEntry}
              name="2"
              className="c-keypad_digit c-keypad_digit--9"
            >
              9
            </div>
            <div
              onClick={handleRemoveLastKeypadEnty}
              name="2"
              className="c-keypad_digit c-keypad_digit--cancel"
            >
              ❌
            </div>
            <div
              onClick={handleKeypadEntry}
              name="2"
              className="c-keypad_digit c-keypad_digit--0"
            >
              0
            </div>
            <div
              className="c-keypad_digit c-keypad_digit--accept"
              onClick={handleAddNewEntry}
            >
              ✅
            </div>
          </div>
        </div>
      </article>

      <div className="l-app_col--last c-charge-list">
        <div className="c-charge-section_container">
          <ul className="c-charge-section_list">
            {chargeEntries.map((c, idx) => (
              <li key={`${idx}-${Math.random()}`}>
                <CurrencySymbol />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="c-charge-section_divider" />

          <div className="c-charge-section_total">
            <CurrencySymbol />
            <span className="a-amount">{totalEntriesVal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
