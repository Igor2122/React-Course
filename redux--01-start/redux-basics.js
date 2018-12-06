const redux = require("redux");
const createStore = redux.createStore;


const initialState = {
    counter: 0
};

// REDUCER created first as we updated the state in the store with reducer only 
const rootReducer = (state = initialState, action) => { // current state, def value assigned with = 
    if(action.type === 'INCR_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    
    return state;  // updated state
};

// STORE 
const store = createStore(rootReducer);
console.log(store.getState());

// Subscribtion 
store.subscribe(() => {
    console.log('[Subscribtion]', store.getState());
}) // takes and art = func will be exec when the state is updated 

// ACTION Dispatching Action 
store.dispatch({type: 'INCR_COUNTER'}); // takes an action argument 
store.dispatch({type: 'ADD_COUNTER', value: 10}); // takes an action argument 

console.log(store.getState());



