import React from "react";
import data from "./data";
import "./css/Post.css"
import LazyLoad from "react-lazyload"

const Spinner = ()=>(
  <div className="post loading">
  
  <h5>Loading...</h5></div>
)


const Post =({id,title,body})=>(
  <div className="Post">
  <LazyLoad
  once={true}
  placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} alt="..." /> }
  >
  <div className="post-img">
  <img src={`https://picsum.photos/id/${id}/200/200`} alt="..." />
  </div>

  </LazyLoad>
  <div className="Post-body">
  <h4>{title}</h4>
  <p>{body}</p>
  </div>
  </div>
);


const App=()=>(
  <div className="App">
  <h2>LazyLoad Demo</h2>

  <div className="Post-container">
  {data.map(post=>(
    <LazyLoad key={post.id}
    height={100}
    offset={[-100,100]} 
    placeholder={<Spinner />} >
    <Post key={post.id} {...post} />
    </LazyLoad>
  ))}
  </div>
  
  </div>
);

export default App;