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
export const add = (val) => { // can receive any payloads if we want to send with action 
   return {
      type: ADD,
      val: val
   }
}
export const subtract = (value) => { // can receive any payloads if we want to send with action 
   return {
      type: SUBTRACT,
      val: value
   }
}

export const saveResult = ( res ) => {
   return {
      type: STORE_RESULT,
      result: res
   }
}

export const storeResult = (res) => { // can receive any payloads if we want to send with action 
   return disptch => {

      setTimeout(() =>{
         disptch(saveResult(res))
      } ,2000)
   }
}
export const deleteResult = (resultElId) => { // can receive any payloads if we want to send with action 
   return {
      type: DELETE_RESULT,
      resultElId: resultElId
   }
}
