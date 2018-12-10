const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'INCRIMENT':
            // ...state is the same as we would do: so here we update the state in enumerable way 
                        /* 
                    const newStae = Object.assign({}, state);
                        newStae.counter = state.counter + 1;
                        return newStae 
                        */
            return {
            ...state, // we don't have to pass it 
            counter: state.counter + 1,
        }
        case 'DECREMENT':
            return {
            ...state,
            counter: state.counter - 1,
        }
        case 'ADD5COUNTER':
            return{
            ...state,
            counter: state.counter + action.val,// the property val comes from the counter container
        }
        case 'DECREMENT5COUNTER':
            return {
            ...state,
            counter: state.counter - action.val,
        }
        case 'STORE_RESULT': 
            return{
                ...state,
                results: state.results.concat({id: new Date(), val:state.counter})// we do not use push as it will 
            }
    }
    // eslint-disable-next-line
   return state; // all the app state will come to single reducer, if not handled in the current switch we return the current state in order not to break our application 
};

export default reducer;

