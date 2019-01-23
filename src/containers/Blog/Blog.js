import React, { Component } from 'react';

import './Blog.css';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
//import FullPost from '../FullPost/FullPost';

const AsyncComponent = asyncComponent(()=>{
    return import('../NewPost/NewPost');
})

class Blog extends Component {

    state = {
        auth:true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color:'orange',
                                        fontWeight:'bold'
                                    }}
                                    >
                                        Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post' ,
                                hash: '#submit',
                                search: '?quick-submit=true',
                                activeClassName:"my-active",
                                activeStyle:{
                                    color:'orange',
                                    fontWeight:'bold'
                                }
                            }} >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncComponent} /> : null}
                    <Route path="/" component={Posts} />
                    {/* <Route render={()=>(<h1> NOT FOUNT 404 </h1>)} /> */}
                    <Redirect from="/posts" to="/" />
                </Switch>
            </div>
        );
    }
}

export default Blog;