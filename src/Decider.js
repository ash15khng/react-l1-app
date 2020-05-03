import React, {useState} from "react";

const Decider = () => {
  let [choice, setChoice] = useState("");
  let [list, setList] = useState([]);
  let [decision, setDecision] = useState("");
  function addChoice(e) {
    e.preventDefault();
    if (choice !== "") {
      setList([...list, choice]);
    }
    setChoice("");
  }
  function inputChange(e) {
    setChoice(e.target.value);
  }
  function reset() {
    setList([]);
    setDecision("");
  }
  function decide() {
    let item = list[Math.floor(Math.random() * list.length)];
    setDecision(`The computer has chosen ${item}.`);
  }
  return (
    <div>
      <h1>Let the computer decide!</h1>
      <ul>
        {
          (list.length !== 0) ? (list.map((elem, index) => {
            return (<div key={index}>
              <li>{elem}</li>
            </div>)
          })) : <p>No choices?</p>
        }
      </ul>
      <form onSubmit={addChoice}>
        <label>Choice:</label>
        <input type="text" value={choice} onChange={inputChange}></input>
        <button>Add choice</button>
      </form>
      <button onClick={reset}>Reset choices</button>
      <div>
        {(list.length > 1) ? <button onClick={decide}>Decide!</button> : <p>Not enough elements to decide</p>}
      </div>
      <p>{decision}</p>
    </div>
  );
}

export default Decider;