import React, { useState, useEffect } from "react";
import firebase from "./database";


const DataPull = () => {
<<<<<<< HEAD
  let [data, setData] = useState([]);
  useEffect(() => {
    firebase.database().ref("/posts").on("value", (snapshot) => {
      try {
        let data = snapshot.val();
        let dataArray = Object.entries(data);
        setData(dataArray);
        console.log(dataArray);
      } catch {
        setData([]);
      }
    });
    return () => firebase.database().off();
  }, []);
  return data;
=======
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
>>>>>>> 742adc5f0c565ebbbbd6318a145e8bb7e099c75e
};

const DataPush = ({ title, image, alt, caption }) => {
    firebase.database().ref("/posts/" + title).set({ title, image, alt, caption });
};

<<<<<<< HEAD
const Post = ({title, image, alt, caption}) => {

  function removePost() {
    firebase.database().ref("/posts/"+title).remove();
  }
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={alt}></img>
      <p>{caption}</p>
      <button onClick={removePost}>Delete post</button>
    </div>
  );
};


=======
const Post = ({ title, image, alt, caption }) => {


    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={alt}></img>
            <p>{caption}</p>
        </div>
    );
};
>>>>>>> 742adc5f0c565ebbbbd6318a145e8bb7e099c75e




const Instafake = () => {
<<<<<<< HEAD
  let [title, setTitle] = useState("");
  let [image, setImage] = useState("");
  let [alt, setAlt] = useState("");
  let [caption, setCaption] = useState("");
  let data = DataPull();
  console.log(data);
  
  const submitPost = (e) => {
    e.preventDefault(); 
    DataPush({title, image, alt, caption});
    setTitle("");
    setImage("");
    setAlt("");
    setCaption("");
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
        <button>Submit</button>
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
=======
    let data = DataPull();
    console.log(data);

    let [title, setTitle] = useState("");
    let [image, setImage] = useState("");
    let [alt, setAlt] = useState("");
    let [caption, setCaption] = useState("");

    const submitPost = () => {
        DataPush({ title, image, alt, caption });
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
    }
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
>>>>>>> 742adc5f0c565ebbbbd6318a145e8bb7e099c75e
};

export default Instafake;
