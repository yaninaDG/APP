import React, { Component } from 'react';
import axios  from 'axios'

class Form extends Component{
	inputText
	inputTitle

	constructor(props){
		super (props);
		this.state={posts:[]}
		this.submitPost = this.submitPost.bind(this)
	}
	submitPost=(e)=>{
			e.preventDefaut();
			console.log(this.inputTitle.value)
			let post={ title: this.inputText.value,
			description:'' 
		}
		this.setState({
			Post: [...this.state.posts,
				   ...[post]
				   ]
		})
	};

 componentWillMount(){
      axios('https://jsonplaceholder.typicode.com/todos/1/posts').then(response =>{
      	console.log('asdasd')
      	this.setState({posts: response.data})
      })
    }


  componentDidMount(){
	  this.inputTitle.focus()
	  this.inputTitle.style.border='1px green solid'
    }

	render(){
		const text =(props)=>{
			
			return (<p>{props.title}</p>)
		}

	let Avatar = (props) => {
		return (<div><img src = {props.url}/>
					<p>{props. nombre }</p></div>)
	}

	 let Post = (props) => <p className={props.className}>{props.post.title}</p>
     let postList = this.state.posts.map( (post, index) => {
       let Parrafo = index % 2 == 0 ? 'par':'impar'
       return (<Post className={Parrafo} post={post} />)
     })

	return(
		<div>
			{postList}
			<Avatar nombre = "nombre" url="http://i.pravatar.cc/150?img=3"/>

		<form onSubmit={this.submitPost} >
		<img></img>
		 	<input type="text" className="usrname"
		 	ref={(inputTitle)=>{this.inputTitle=inputTitle}}/>
		  	<textarea className="Form"></textarea>
		  	<button onclick={this.submitPost}>enviar</button>
		  </form>
		</div>
	);
}

}
export default Form;