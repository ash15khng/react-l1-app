import React, {useState, useEffect} from "react";
import firebase from "./database";

const DataPull = () => {

  let [data, setData] = useState([]);
  useEffect(() => {
    firebase.database().ref("/posts").on("value", (snapshot) => {
      let data = snapshot.val();
      let dataArray = Object.entries(data);
      setData(dataArray);
      console.log(dataArray);
    });
    return () => firebase.database().off();
  }, []);
  return data;
};

const DataPush = ({title, image, alt, caption}) => {
  firebase.database().ref("/posts/"+title).set({title, image, alt, caption});
};

const Post = ({title, image, alt, caption}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={alt}></img>
      <p>{caption}</p>
    </div>
  );
};


const Instafake = () => {
  let data = DataPull();
  console.log(data);
  return (
    <div>
      {
        data.map((post) => {
          return <Post 
          key={post[0]} 
          title={post[1].title} 
          image={post[1].image} 
          alt={post[1].alt} 
          caption={post[1].caption} 
          />
        })
      }
    </div>
  );
};

export default Instafake;