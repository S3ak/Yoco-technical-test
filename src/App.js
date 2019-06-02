import React from "react";
import "./App.scss";

import CurrencySymbol from "./components/CurrencySymbol/index";
import KeypadDigit from "./components/KeypadDigit";

const { useState, useEffect } = React;

const mockEntries = [1.23, 4.56, 7.89];

// TODO: needs to be an array of Entry objects
// const mockEntry = {
//   id: 1,
//   val: 1.23,
// }

function getSum(total, num) {
  return total + Math.round(num.val);
}

function App() {
  const [currentVal, setCurrentVal] = useState("0.00");
  const [chargeEntries, setChargeEntries] = useState([]);
  const [totalEntriesVal, setTotalEntriesVal] = useState();

  const handleAddNewEntry = () => {
    if (currentVal && currentVal !== "0.00") {
      setChargeEntries(prevVal => [
        ...prevVal,
        {
          // TODO: Id's like this are not safe
          id: `${currentVal}-${Math.random()}`,
          val: parseFloat(currentVal)
        }
      ]);
      setCurrentVal("0.00");
    }
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
    if (currentVal && currentVal !== "0.00") {
      setCurrentVal(prevVal => {
        return prevVal.toString().slice(0, -1);
      });
    }
  };

  const handleRemoveEntry = c => {
    const newArray = chargeEntries.filter(entry => entry.id !== c.id);
    setChargeEntries(newArray);
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(digit => (
              <KeypadDigit
                digit={digit}
                key={digit}
                handleOnClick={handleKeypadEntry}
              />
            ))}

            <div
              onClick={handleRemoveLastKeypadEnty}
              className="c-keypad_digit c-keypad_digit--cancel"
            >
              ❌
            </div>

            <div
              onClick={handleKeypadEntry}
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
              <li
                key={c.id}
                onClick={() => {
                  handleRemoveEntry(c);
                }}
              >
                <CurrencySymbol />
                <span>{c.val}</span>
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
