import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        post : [],
        selectedPostId : null,
        error:false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
               (res)=>{
                   const posts = res.data.slice(0,4);
                   const updatedPosts = posts.map(post => {
                      return {...post,
                                author : 'Lakith'
                    }
                   })
                   this.setState({post:updatedPosts})
                }
            ).catch((err)=>{
                this.setState({error:true});
            });
    }

    postClickHandler = (id)=>{
        this.setState({selectedPostId : id})
    }


    render () {

        let posts = <h3>Something went wrong</h3>
        
        if(!this.state.error){
            posts = this.state.post
                .map(post => (
                    <Post 
                        key={post.id}
                        author={post.author}
                        title={post.title}
                        click={()=>this.postClickHandler(post.id)} />
                ))
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;