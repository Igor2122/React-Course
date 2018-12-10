const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCRIMENT'){
        return {
            ...state, // we don't have to pass it 
            counter: state.counter + 1,
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if(action.type === 'ADD5COUNTER'){
        return{
            ...state,
            counter: state.counter + action.val,// the property val comes from the counter container
        }
    }
    if(action.type === 'DECREMENT5COUNTER'){
        return {
            ...state,
            counter: state.counter - action.val,
        }
    }
    
    
    return state;
};

export default reducer;

