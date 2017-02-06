import {FETCH_DATA, FETCH_DATA_SUCCESS, SET_SELECTED_ITEM,SET_COMMENT_FOR_ITEM,SET_ROUTE} from '../constants/ActionTypes';
import {browserHistory} from 'react-router';

const initialState = {
    selectedItem: {},
    isFetching: false,
    didInvalidate: false,
    items: [],
    lastUpdated: "",
    route: "/"
  };

export default function colorfulSquares(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTE:
      browserHistory.push(action.route);
      return Object.assign({}, state, {
        route: action.route
      });
    case SET_COMMENT_FOR_ITEM:
      localStorage.setItem(action.id, action.text);
      const updatedItems = state.items.map(item=>{
          if(item.id === action.id){
            item.text = action.text;
          }
          return item;
      }); 
      return Object.assign({}, state,{
        items: updatedItems
      });
    case SET_SELECTED_ITEM:
      const selectedItem = state.items.find(item=>{
        return item.id === action.id;
      }); 
      return Object.assign({}, state, {
        selectedItem: selectedItem
      });
    case FETCH_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state
  }
}