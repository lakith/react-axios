import React, { Component } from 'react';

import './Blog.css';
import {Route,NavLink,Switch} from 'react-router-dom';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
//import FullPost from '../FullPost/FullPost';

class Blog extends Component {

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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;