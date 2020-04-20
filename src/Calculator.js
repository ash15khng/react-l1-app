import React, {useState} from "react";

const Calculator = () => {
  let [answer, setAnswer] = useState(0);
  let [input, setInput] = useState("");
  function calculate() {
    let newInput = input.replace("/^(0+)|[\+\-\*\/](0)/", "")
    return setAnswer(eval(newInput));
  }
  return (
    <div>
      <h2>{answer}</h2>
      <h1>{input}</h1>
      <button onClick={() => setInput(input += "1")}>1</button>
      <button onClick={() => setInput(input += "2")}>2</button>
      <button onClick={() => setInput(input += "3")}>3</button>
      <button onClick={() => setInput(input += "4")}>4</button>
      <button onClick={() => setInput(input += "5")}>5</button>
      <button onClick={() => setInput(input += "6")}>6</button>
      <button onClick={() => setInput(input += "7")}>7</button>
      <button onClick={() => setInput(input += "8")}>8</button>
      <button onClick={() => setInput(input += "9")}>9</button>
      <button onClick={() => setInput(input += "0")}>0</button>
      <button onClick={() => setInput(input += "+")}>+</button>
      <button onClick={() => setInput(input += "-")}>-</button>
      <button onClick={() => setInput(input += "*")}>*</button>
      <button onClick={() => setInput(input += "/")}>/</button>
      <button onClick={calculate}>=</button>
      <br></br>
      <button onClick={() => setInput("")}>Clear</button>
    </div>
  );
};

export default Calculator;