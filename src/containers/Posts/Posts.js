import React,{Component} from 'react';
import {Route} from 'react-router-dom';

import Post from './../../components/Post/Post';
import axios from 'axios'
import './Posts.css';
import FullPost from '../FullPost/FullPost';



// import {Link} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
        //loginState:false
    }

    componentDidMount () {

        console.log(this.props);

        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname:'/posts/'+id});
    }

    // makeItLogin =()=>{
    //     this.setState(
    //         prevState => ({
    //             loginState: !prevState.loginState
    //         })
    //     );

    // }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                //<Link to={"/posts/"+post.id} key={post.id} >
                    <Post 
                        key={post.id}  
                        title={post.title} 
                        author={post.author}
                        click={() => this.postSelectedHandler(post.id)} />
               // </Link>
                );
            });
        }

        // let loginText = "";
        // if(this.state.loginState){
        //     loginText="LogOut";
        // } else {
        //     loginText="LogIn";
        // }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* <button style={{marginLeft:'50%'}} onClick={this.makeItLogin}>{loginText}</button> */}
                {/* {this.state.loginState ? <Route path="/:id" exact component={FullPost} /> : null}  */}
                <Route path="/posts/:id" exact strict component={FullPost} /> 
            </div>
        );
    }
}

export default Posts;