import React from 'react';

const cockpit = (props) => {
    return(
        <div> 
            <h1>{props.title}</h1>
              <p>This is really working</p>
            <button onClick={props.toggle}>Toggle View</button>
        </div>
        );
};

export default cockpit;