import * as actionTypes from './actionsTypes';

export const increment = () => { // can receive any payloads if we want to send with action 
   return {
      type: actionTypes.INCREMENT 
   }
}
export const decrement = () => { // can receive any payloads if we want to send with action 
   return {
      type: actionTypes.DECREMENT
   }
}
export const add = (val) => { // can receive any payloads if we want to send with action 
   return {
      type: actionTypes.ADD,
      val: val
   }
}
export const subtract = (value) => { // can receive any payloads if we want to send with action 
   return {
      type: actionTypes.SUBTRACT,
      val: value
   }
}