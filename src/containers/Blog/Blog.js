import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';

import { Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost'
import fullPos from './FullPost/FullPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {



// <Route -- all are reserved words and expected to named like that 
    render () {
        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="my-active">Home</NavLink></li>
                        <li><NavLink to={{
                            pathname:  "/new-post", // relative path(takes the cur path + new) 
                            hash: '#submit', // examples
                            search: '?quick-submit=true' // examples
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>  
            </header>
            { /* <Route path="/" exact render={() => <h1>Home</h1>} /> */ }
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" component={NewPost} />
            <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;