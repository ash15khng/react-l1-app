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
  name: "Ashley",
  age: 15
},
{
  name: "Someone",
  age: 100
}];

let person2 = {
  name: "Someone",
  age: 100,
}

// const Person = ({name, age}) => {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };



const App = () => {
  return (
    <div>
      {
        person.map((elem) => {
          return (
            <Person name={elem.name} age={elem.age} />
          )
        })
      }
    </div>
  );
}

ReactDOM.render(<App />, root);