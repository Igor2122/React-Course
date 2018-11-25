import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    
    state = {
        posts: [],
        selectedPostId: null
    }
        
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // console.log(response);
            const posts = response.data.slice(0, 4);
            console.log(posts);
            const updatedPosts = posts.map( post  => {
                return {
                    ...post,
                    author: 'Igor'
                }
            })
            this.setState({posts: updatedPosts}); // here we pass a modyfied object with added atuthor
        });
    }
    
    postSelectedHandler (id) {
        this.setState({selectedPostId: id});
    }

    render () {
        
        const allposts = this.state.posts.map(
            post => {
                return <Post
                    clicked={() => this.postSelectedHandler(post.id)} // here we can select the post id
                    key={post.id}
                    title={post.title}
                    author={post.author}/>;
            }    
        );
        
      
        return (
            <div>
                <section className="Posts">
                    {allposts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;