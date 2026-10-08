import { useState } from "react";
import "./App.css";

function CalcButton({ buttonLabel, onClick, className = "" }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [display, setDisplay] = useState("");
  const [operand1, setOperand1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.currentTarget.textContent;

    if (operator === null) {
      const nextOperand =
        operand1 === null || isResultDisplayed ? value : operand1 + value;
      setOperand1(nextOperand);
      setDisplay(nextOperand);
      setIsResultDisplayed(false);
    } else {
      const nextOperand = operand2 === null ? value : operand2 + value;
      setOperand2(nextOperand);
      setDisplay(nextOperand);
    }
  };

  const operationButtonClickHandler = (e) => {
    e.preventDefault();
    const value = e.currentTarget.textContent;

    if (operand1 !== null) {
      setOperator(value);
      setOperand2(null);
      setDisplay("");
      setIsResultDisplayed(false);
    }
  };

  const equalButtonClickHandler = (e) => {
    e.preventDefault();

    if (operand1 === null || operator === null || operand2 === null) {
      return;
    }

    const firstNumber = Number(operand1);
    const secondNumber = Number(operand2);
    let result;

    if (operator === "+") {
      result = firstNumber + secondNumber;
    } else if (operator === "-") {
      result = firstNumber - secondNumber;
    } else if (operator === "*") {
      result = firstNumber * secondNumber;
    } else if (operator === "÷") {
      if (secondNumber === 0) {
        setDisplay("Cannot divide by zero");
        setOperand1(null);
        setOperator(null);
        setOperand2(null);
        setIsResultDisplayed(false);
        return;
      }
      result = firstNumber / secondNumber;
    }

    const resultText = String(result);
    setDisplay(resultText);
    setOperand1(resultText);
    setOperator(null);
    setOperand2(null);
    setIsResultDisplayed(true);
  };

  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisplay("");
    setOperand1(null);
    setOperator(null);
    setOperand2(null);
    setIsResultDisplayed(false);
  };

  const showSurname = () => {
    setDisplay("Rhedjhie Santos Calma");
  };

  return (
    <div className="App">

      <h1 className="calculator-title">
        Calculator of Rhedjhie Santos Calma - IT3A
      </h1>

      <div className="calculator">

        <div className="display">
          {display || "0"}
        </div>

        <div className="buttons">
          <CalcButton buttonLabel="7" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="8" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="9" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="÷" className="operator" onClick={operationButtonClickHandler} />
          <CalcButton buttonLabel="4" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="5" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="6" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="*" className="operator" onClick={operationButtonClickHandler} />
          <CalcButton buttonLabel="1" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="2" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="3" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="-" className="operator" onClick={operationButtonClickHandler} />
          <CalcButton buttonLabel="0" onClick={buttonClickHandler} />
          <CalcButton buttonLabel="C" className="clear" onClick={clearButtonClickHandler} />
          <CalcButton buttonLabel="=" className="equal" onClick={equalButtonClickHandler} />
          <CalcButton buttonLabel="+" className="operator" onClick={operationButtonClickHandler} />
        </div>

        <button className="surname" onClick={showSurname}>
          CALMA
        </button>

      </div>
    </div>
  );
}

export default App;