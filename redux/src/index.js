import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // combineReduceers to combine both reducers we useing 

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'; // added the reducer where we manage & instantiate the state
import resultReducer from './store/reducers/result'; // added the reducer where we manage & instantiate the state  
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

// MIDDLEWARE
const logger = store => {
    return next => { // will proceed to via action to reducer
        return action => { // action we dispatched as input 
            console.log('[Middleware] Dispatching: ', action);
            const result = next(action);// will let the actino to proceed to reducer but to do that we need to pass the action as argmnt
            console.log('[Middleware] next State', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger))); // inported above; 2nd param will be enhancer

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));// def property expected store; now the store is connceted to our ap
registerServiceWorker();
