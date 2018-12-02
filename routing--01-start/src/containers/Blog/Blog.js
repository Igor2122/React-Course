import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';

// import NewPost from './NewPost/NewPost';
import assyncComponent from '../../hoc/assyncComp';
const AsyncNewPost  = assyncComponent(() => {
    return import('./NewPost/NewPost');
})
 
class Blog extends Component {
    
    state = {
        auth: true,
    }
    
    

    
    render () {
        
        let newPost = null;
        if(this.state.auth){
            newPost = <Route path="/new-post"  component={AsyncNewPost} />
        }

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                exact 
                                to="/posts/"
                                activeClassName="myActive"
                                >Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: "/new-post", 
                                // pathname: this.props.match.url + "/new-post", // this will be a relative path 
                                hash: '#submit',
                                search: '?quick-submit=true'/*some examples*/
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* rendering pure JSX
                <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home</h1>}/> */}
                <Switch>
                    
                    <Route path="/posts"  component={Posts} />
                    {/*<Route render={() => <h1>Page Not Found</h1>}/>*/}
                    {/*<Redirect from="/" to="/posts" /> */}
                </Switch>
                {newPost}
            </div>
        );
    }
}

export default Blog;