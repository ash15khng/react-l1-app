import React, {useState, useEffect} from "react";
import firebase from "./database";

let [title, setTitle] = useState("");
let [image, setImage] = useState("");
let [alt, setAlt] = useState("");
let [caption, setCaption] = useState("");

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

const submitPost = () => {
  DataPush({title, image, alt, caption});
}
const titleChange = (e) => {
  setTitle(e.target.value);
};
const imageChange = (e) => {
  setImage(e.target.value);
};
const altChange = (e) => {
  setAlt(e.target.value);
};
const captionChange = (e) => {
  setCaption(e.target.value);
};

const Instafake = () => {
  let data = DataPull();
  console.log(data);
  return (
    <div>
      <form onSubmit={submitPost}>
        <label>Title: </label>
        <input type="text" value={title} onChange={titleChange}></input>
        <label>Image: </label>
        <input type="text" value={image} onChange={imageChange}></input>
        <label>Alt: </label>
        <input type="text" value={alt} onChange={altChange}></input>
        <label>Caption: </label>
        <input type="text" value={caption} onChange={captionChange}></input>
        <button></button>
      </form>
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