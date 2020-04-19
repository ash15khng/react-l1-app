import React, {useState} from 'react';

const Counter = () => {

  let [counter, setState] = useState(0);
  let addCounter = () => {
    setState(counter + 1);
  };
  let subtractCounter = () => {
    setState(counter - 1);
  };
  let resetCounter = () => {
    setState(0);
  }

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