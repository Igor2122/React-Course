import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    // eslint-disable-next-line
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
        // here we can add some logic !considered to be a better practice
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result * 2})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;