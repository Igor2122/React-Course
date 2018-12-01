import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; // this is a default 

// HANDLING THE REQEUSTS 
axios.interceptors.request.use(request => { // this is a request config
    // console.log(request);
    // we need to always return the request 
    
    return request;
}, error => { // we can also pass the error funtion 
    console.log(error);
    return Promise.reject(error);
});


// HANDLING THE RESPONSES
axios.interceptors.response.use(response => {
    // console.log(response);
    return response;
}, error => { // we can also pass the error funtion 
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
