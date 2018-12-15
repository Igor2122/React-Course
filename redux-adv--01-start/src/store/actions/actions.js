export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// ACTION CREATORS - runction that creates and aciton 

export const increment = () => { // can receive any payloads if we want to send with action 
   return {
      type: INCREMENT 
   }
}
export const decrement = () => { // can receive any payloads if we want to send with action 
   return {
      type: DECREMENT
   }
}
export const add = () => { // can receive any payloads if we want to send with action 
   return {
      type: ADD
   }
}
export const subtract = () => { // can receive any payloads if we want to send with action 
   return {
      type: SUBTRACT
   }
}
export const storeResult = () => { // can receive any payloads if we want to send with action 
   return {
      type: STORE_RESULT
   }
}
export const deleteResult = () => { // can receive any payloads if we want to send with action 
   return {
      type: DELETE_RESULT
   }
}
