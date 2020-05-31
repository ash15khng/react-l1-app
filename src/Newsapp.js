import React, {useState, useEffect} from "react";
import "./Newsapp.css";

const News = ({title, image, desc, url}) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={desc} width="400px" />
      <p>{desc}</p>
      <a href={url}>Read more...</a>
    </div>
  );
}; 

const Newspage = () => {
  let [news, setNews] = useState([]);
  let [search, setSearch] = useState("");
  let pullHeadlines = async () => {
    let data = await fetch('https://newsapi.org/v2/top-headlines?country=sg&apiKey=d29398084f504cee9ea5032bc01d7b0c&q=' + search);
    let dataJson = await data.json();
    setNews(dataJson.articles);
  };
  let searchChange = (e) => {
    setSearch(e.target.value);
  }
  let searchNews = (e) => {
    e.preventDefault();
    return pullHeadlines(search);
  };
  
  useEffect(() => {
    pullHeadlines(search);
  }, []);

  return (
    <div>
      <h1 className="header">Top news today:</h1>
      <form onSubmit={searchNews} className="searchbar">
        <label>Search terms: </label>
        <input type="text" value={search} onChange={searchChange}></input>
        <button>Search</button> 
      </form>
      <div className="newslist">
        {
          news.map((item) => {
            return (<News 
            className="newsitem"
            key={item.title}
            title={item.title} 
            image={item.urlToImage}
            desc={item.description}
            url={item.url}/>)
          })
        }
      </div>
    </div>
  );
};

export default Newspage;