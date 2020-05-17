import React, {useState} from "react";

const Dice = ({dtype, dtimes, dadd}) => {
  let [result, setResult] = useState("");
  let [type, setType] = useState(dtype);
  let [times, setTimes] = useState(dtimes);
  let [add, setAdd] = useState(dadd);

  function roll(e) {
    e.preventDefault();
    let display = `${times}D${type}+${add}: `;
    let total = 0;
    for (let i = 0; i < times; i++) {
      let value = Math.floor(Math.random() * type) + 1;
      total += value;
    }
    total += Number(add);
    display += String(total);
    setResult(display);
    return total;
  }
  function changeType(e) {
    setType(e.target.value);
  }
  function changeTimes(e) {
    setTimes(e.target.value); 
  }
  function changeAdd(e) {
    setAdd(e.target.value);  
  }

  return (
    <div>
      <p>{`${times}D${type} + ${add}`}</p>
      <form onSubmit={roll}>
        <label>Rolling </label>
        <select value={type} onChange={changeType}>
          <option value="4">D4</option>
          <option value="6">D6</option>
          <option value="10">D10</option>
          <option value="20">D20</option>
          <option value="100">D100</option>
        </select>
        <label> times </label>
        <input type="number" value={times} onChange={changeTimes}></input>
        <label> + </label>
        <input type="number" value={add} onChange={changeAdd}></input>
        <button>Roll</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

const DndDice = () => {
  let [dice, setDice] = useState([
    {type: 6, times: 1, add: 0},
    {type: 100, times: 1, add: 1}
  ]);
  let [display, setDisplay] = useState([]);
  return (
    <div>
      <h1>DND DICE ROLLER</h1>
      {
        dice.map((die) => {
          return (<Dice key={`${die.times}D${die.type}+${die.add}`} dtype={die.type} dtimes={die.times} dadd={die.add} />)
        })
      }
    </div>
  );
};

export default DndDice;