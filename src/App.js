import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="l-app">
      <article className="l-app_col--first">
        <div className="c-cal">
          <div className="c-cal_display" />
          <div className="c-cal_display" />
        </div>
      </article>

      <div className="l-app_col--last">
        <div className="c-charge-list-container">
          <div className="c-charge-list">
            <ul>
              <li>
                <span>R1.23</span>
                <span>R4.56</span>
                <span>R7.89</span>
              </li>
            </ul>
          </div>

          <hr className="c-charge_divider" />

          <div className="c-charge-total">
            <span className="currency-symbol">R</span>
            <span className="amount">13.68</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
