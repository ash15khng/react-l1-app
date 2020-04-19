import React, {useState, useEffect} from 'react';

const Counter = () => {

  let counterData = JSON.parse(localStorage.getItem("counter"));
  let [counter, setState] = useState(counterData || 0);
  let addCounter = () => setState(counter + 1);
  let subtractCounter = () => setState(counter - 1);
  let resetCounter = () => setState(0);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));  

  });

  return (
    <div style={{textAlign: "center"}}>
      <h2>{counter}</h2>
      <button onClick={addCounter}>+</button>
      <button onClick={resetCounter}>0</button>
      <button onClick={subtractCounter}>-</button>
    </div>
  );
}

export default Counter;