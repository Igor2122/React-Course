export const INCRIMENT = 'INCRIMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// ACTION CREATOR - is the function that returns a function 

export const increment = () => {
    return {
        type: INCRIMENT
    };
};
