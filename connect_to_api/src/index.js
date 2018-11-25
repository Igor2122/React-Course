import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.requests.use(request => { // this is a request config
    console.log(request);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
