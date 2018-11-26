
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    
    state = {
        posts: [],
    }
    
    
    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            // console.log(response);
            const posts = response.data.slice(0, 4);
            console.log(posts);
            const updatedPosts = posts.map( post  => {
                return {
                    ...post,
                    author: 'Igor'
                };
            });
            this.setState({posts: updatedPosts}); // here we pass a modyfied object with added atuthor
        })
        .catch( error => {
            console.log(error);
            // this.setState({error: true});
        });
    }
    
    
    
    postSelectedHandler (id) {
        this.setState({selectedPostId: id});
    }
    
    
    render(){
        let allposts = <p style={{textAlign: 'center'}}>Soemthing went wrong ... </p>;
        
            if(!this.state.error){
                allposts = this.state.posts.map(
                post => {
                    return <Post
                        clicked={() => this.postSelectedHandler(post.id)} // here we can select the post id
                        key={post.id}
                        title={post.title}
                        author={post.author}/>;
                }    
            );    
        }

        
        return(
            <section className="Posts">
                {allposts}
            </section>
        );
    }
}

export default Posts;