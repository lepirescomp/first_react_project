import React, { Component } from 'react';
import "../post.css";

class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			likes: props.initialLikes
		}
	}

	render(){
		console.log(this.props);
		return(

			<div className={"post"}>
		      <h3>{this.props.content}</h3>
		      <small> {this.props.author}</small>
		      <small>{this.props.time}</small>
			      <div style={likeLine}>
			      <p>Likes: {this.state.likes} </p>
				      <button 
				      onClick={() => this.setState({likes: this.state.likes + 1 })}

				      style={{'backgroundColor': 'blue' ,
				      'color':'White' ,
				      'fonteSize':16,
				      'border':'none',
				      'borderRadius':'10'	
			  		}}> Like </button>
	    		</div>
    		</div>
			)
	}

}
const likeLine={
	'display':'flex',
	'justifyContent':'space-around'
}

export default Post;