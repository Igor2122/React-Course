// importing the actions 
import * as actionTypes from  '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case actionTypes.STORE_RESULT: 
            return{
                ...state,
                results: state.results.concat({id: new Date(), val: action.result})// we do not use push as it will 
            }
        case actionTypes.DELETE_RESULT:
            const newArr = state.results.filter(result =>  result.id !== action.resElId); // we are seinding here from conter.js
            return {
                ...state,
                results: newArr
            }
    }
    // eslint-disable-next-line
   return state; // all the app state will come to single reducer, if not handled in the current switch we return the current state in order not to break our application 
};

export default reducer;

