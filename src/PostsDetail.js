import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';





class PostDetail extends Component {
   constructor(props){
       super(props)

       this.state= {
           post: props.location.state.post
       }
   }

componentWillMount() {
   axios.get('',{
       params:{
           id: this.props.match.params.id
       }
   }).then(response => this.setState({post: response.data[0]}))
}
   render() {
       return (
           <div>
               <h1>{this.state.post.title}</h1>
           </div>
       )
   }
}



export default PostDetail;