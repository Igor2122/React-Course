import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'; // combineReduceers to combine both reducers we useing 

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'; // added the reducer where we manage & instantiate the state
import resultReducer from './store/reducers/result'; // added the reducer where we manage & instantiate the state  
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})
const store = createStore(rootReducer); // inported above 


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));// def property expected store; now the store is connceted to our ap
registerServiceWorker();
