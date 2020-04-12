import React from "react";

const Person = ({name, age, family, image}) => {
    return (
    <div>
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
        <ul>
            {
                family.map((elem) => {
                    return <li key={elem}>{elem}</li>;
                })
            }
        </ul>
        <img src={image} alt={name} width="200" />
    </div>
    );
};

export default Person;