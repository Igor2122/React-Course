import * as actionTypes from './actionsTypes';

export const saveResult = ( res ) => {
   // here we can always add some logic but probably better to keep all the logic in the reducer no on the action creator 
   // const updatedResult = res * 2;

   return {
      type: actionTypes.STORE_RESULT,
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
      type: actionTypes.DELETE_RESULT,
      resultElId: resultElId
   }
}