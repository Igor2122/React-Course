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
            counter: state.counter + 5,
        }
    }
    if(action.type === 'DECREMENT5COUNTER'){
        return {
            ...state,
            counter: state.counter -5,
        }
    }
    
    
    return state;
};

export default reducer;

