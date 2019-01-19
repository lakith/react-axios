import React, { Component } from 'react';
import  axios from 'axios'

import './FullPost.css';

class FullPost extends Component {

    state = {
        postData : null
    }

    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.postData || (this.state.postData && this.state.postData.id !== this.props.id)){
             axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
            .then(res => 
                   this.setState({postData:res.data})
               )
            }
        }
    }

    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:"center"}}>Loading.....</p>
        }
        if(this.state.postData){
            post = (
                <div className="FullPost">
                    <h1>{this.state.postData.title}</h1>
                    <p>{this.state.postData.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;