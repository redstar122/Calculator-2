import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const showButton = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const showSurname = () => {
    setDisplay("CALMA");
  };

  return (
    <div className="page">

      <h1 className="calculator-title">
        Calculator of Rhedjhie Santos Calma - BSIT-WMD3A
      </h1>

      <div className="calculator">

        <div className="display">
          {display || "0"}
        </div>

        <div className="buttons">
          <button onClick={() => showButton("7")}>7</button>
          <button onClick={() => showButton("8")}>8</button>
          <button onClick={() => showButton("9")}>9</button>
          <button className="operator" onClick={() => showButton("÷")}>
            ÷
          </button>

          <button onClick={() => showButton("4")}>4</button>
          <button onClick={() => showButton("5")}>5</button>
          <button onClick={() => showButton("6")}>6</button>
          <button className="operator" onClick={() => showButton("*")}>
            *
          </button>

          <button onClick={() => showButton("1")}>1</button>
          <button onClick={() => showButton("2")}>2</button>
          <button onClick={() => showButton("3")}>3</button>
          <button className="operator" onClick={() => showButton("-")}>
            -
          </button>

          <button onClick={() => showButton("0")}>0</button>
          <button className="clear" onClick={clearDisplay}>C</button>
          <button className="equal" onClick={() => showButton("=")}>=</button>
          <button className="operator" onClick={() => showButton("+")}>+</button>
        </div>

        <button className="surname" onClick={showSurname}>
          CALMA
        </button>

      </div>
    </div>
  );
}

export default App;