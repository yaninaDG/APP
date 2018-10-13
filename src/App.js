import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Route, Link , withRouter} from "react-router-dom";
import Posts from './Post'
import PostsDetail from './PostsDetail';
import {connect} from 'react-redux';

class App extends Component {
    componentWillMount(){
      console.log('Will Mount')
    }

    componentWillReceiveProps(){
      console.log('Will Receive Props')
    }

     componentDidMount(){
      console.log('did mount')
    }

     shouldComponentUpdate(){
      return false 
    }

      componentDidUpdate(){
      console.log('updated')
    }
constructor(props){
  super(props)
}

  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form />

    <Router>
    <div>
      <ul>
        <li>
           <Link to="/">Home</Link>
           <Link to="posts">posts</Link>
        </li>
     </ul>
        <Route path="/Form" component={Form} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={PostsDetail} />
    </div>
    </Router>
    </div>
   
    );

  }
 
}
const mapStateToProps= state=>{
    return{
      posts:state.posts
    }
  }

export default withRouter(connect(mapStateToProps)(App))
