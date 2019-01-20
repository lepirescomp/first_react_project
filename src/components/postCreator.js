import React, { Component } from 'react';


class PostCreator extends Component{
constructor(){
	super();
	this.state={
		text:''
	}
}

createPost(){
	const newPost={
		content: this.state.text,
		author: 'eu',
		time: new Date().getTime(),
		initialLikes: 0

	}
	console.log(newPost);
	this.props.onCreate(newPost);
}


render(){
	console.log(this.state)
	return(
		<div>
		<h3> Novo Post</h3>
		<input 
		onChange={(event)=>{
			const value=event.target.value;
			this.setState({text:value})

		}}
		value={this.state.text} style={{width:'100%'}}/>
		<button  onClick={()=>this.createPost()}> Algo aqui</button>
		</div>
		)
}

}

export default PostCreator;