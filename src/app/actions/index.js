import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes';

export function setRoute(route) {
  return {type: types.SET_ROUTE ,route};
}

export function setSelectedItem(id) {
  return {type: types.SET_SELECTED_ITEM,id};
}

export function setCommentForItem(id,text) {
  return {type: types.SET_COMMENT_FOR_ITEM,id,text};
}

export function fetchData() {
  return {type: types.FETCH_DATA};
}

export function fetchDataSuccess(json) {
  return {type: types.FETCH_DATA_SUCCESS, items: json, receivedAt: Date.now()};
}

//using thunk for async calls
export function fetchDataAsync() {
  return function (dispatch) {
    //call starting
    dispatch(fetchData())
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(response => response.ok ? response.json() : console.error('data request not ok'))
      .then(json =>{
       //map local storage saved text
       const subSet = json.slice(0,25).map(item =>{
         const existingComment = localStorage.getItem(item.id);
         if(existingComment){
           item.text = existingComment;
         }
         return item;
       });
        //call finished
        dispatch(fetchDataSuccess(subSet));
      })
  }
}
