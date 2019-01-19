import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        post : []
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
            );
    }

    render () {

        const posts = this.state.post
            .map(post => (
                <Post key={post.id} author={post.author} title={post.title} />
            ))

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;