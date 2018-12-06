import React from 'react';
// import { withRouter } from 'react-router-dom'; // we need to indlude it here

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{this.props.match.location.title}</h1>
        <div className="Info">
            <div className="Author">Author: {props.author}</div>
        </div>
    </article>
);

export default post;
// export default withRouter(post); way to get to the routing related psots in case we need those 