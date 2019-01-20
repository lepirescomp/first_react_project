import React, { Component } from 'react';
import Post from "./components/post";
import "./post.css";
import PostCreator from './components/postCreator.js';
const postArray=[
  {
    content:'hsuahsuhas',
    time:'16:23',
    author: 'eu',
    initialLikes:2
  }
,
  {
    content:'texto2',
    time:'10:51',
    author: 'eu',
    initialLikes:0
  }

]



class App extends Component{
  constructor(){
    super();
    this.state={
      posts:postArray
    }
  }

  insertPost(post){
      const myPosts= this.state.posts;
      myPosts.push(post);  
      this.setState({posts:myPosts});  
  }

render(){
  return(

    <div>
      <h1>Minha rede social</h1>
      <PostCreator onCreate={this.insertPost.bind(this)}/>
      {this.state.posts.map((post,i) => {
        return(
        <Post 

          key={i}
          content={post.content}
          author={post.author}
          initialLikes={post.initialLikes}
          time={post.time}>

          {post.content} 


        </Post>
        )
      })}
      
     
    </div>
    )
}

}


export default App;



