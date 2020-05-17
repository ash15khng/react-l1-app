import React from 'react';
import ReactDOM from 'react-dom';
// import Person from "./Person";
// import Counter from "./Counter";
// import Calculator from "./Calculator";
// import NoteApp from "./NoteApp";
// import Decider from "./Decider";
// import Instafake from "./Instafake";
import DndDice from "./DndDice"

const root = document.getElementById("root");

/*
let person = [{
  name: "Someone",
  age: 10,
  family: ["mother", "father"],
  image: "https://randomwordgenerator.com/img/picture-generator/tree-736885_640.jpg"
},
{
  name: "Someone else",
  age: 100,
  family: ["mother", "father", "brother"],
  image: "https://randomwordgenerator.com/img/picture-generator/tree-736885_640.jpg"
}];


const App = () => {
  let handleClick = () => {
    console.log("clicked button");
  }

  return (
    <div>
      {
        person.map((elem) => {
          return (
            <Person 
              name={elem.name} 
              age={elem.age} 
              family={elem.family} 
              image={elem.image} 
              key={elem.name} 
            />
          )
        })
      }
      <button onClick={handleClick}>I am a button</button>

      <p>Name: {person[0].name !== undefined ? person[0].name : "no name"}</p>
    </div>
  );
}
*/
ReactDOM.render(<DndDice />, root);