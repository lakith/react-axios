import React, { Component } from 'react';
import axios from 'axios';
//import {Redirect} from 'react-router-dom'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        redirect:false
    }

    componentDidMount(){
        console.log(this.props);
    }

    postDataHandler = ()=>{
        const post = {
            title: this.state.title,
            body : this.state.content,
            author : this.state.author
        }
        axios.post('/posts',post)
             .then(res =>{ 
                 console.log(res)
                 this.props.history.push("/")
                });   
             
        this.setState({redirect:true});
    }

    render () {

        // let go = null;

        // if(this.state.redirect === true){
        //     go = <Redirect to="/" from="/new-post" />
        // }

        return (
            
            <div className="NewPost">
                {/* {go} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Lakith">Lakith</option>
                    <option value="Hansi">Hansi</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;