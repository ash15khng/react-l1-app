import React from 'react';
import ReactDOM from 'react-dom';
import Person from "./Person";
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const root = document.getElementById("root");

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
            <Person name={elem.name} age={elem.age} family={elem.family} image={elem.image} key={elem.name} />
          )
        })
      }
      <button onClick={handleClick}>I am a button</button>
    </div>
  );
}

ReactDOM.render(<App />, root);