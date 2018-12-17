import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    // eslint-disable-next-line
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state); - long version of updating the state
            // newState.counter = state.counter + 1;
            // return newState;
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val});
            // return {
            //     ...state,
            //     counter: state.counter + action.val
            // }
        case actionTypes.SUBTRACT:
            // alternative way of doing this is to use the utility function we created so we do not have to repeat the same code over 
            return updateObject(state, {counter: state.counter - action.val});
            // return {
            //     ...state,
            //     counter: state.counter - action.val
            // }
    }
    return state;
};

export default reducer;