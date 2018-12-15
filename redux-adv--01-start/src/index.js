import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});


// MIDDLEWARE 
const logger = store => {
    return next => { // this is the function we execute to continue to reducer 
        return action => { // 
            console.log('[Middleware] Dispatching: ', action);
            const result = next(action)// this will let the action to continue to reducer and has to take action as afmnt 
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));// we pass middleware here as enhancer we can also pass a list here which will be executed in order

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
