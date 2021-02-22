//import * as c from './../actions/actions';
import { INITIAL_ACTION, SET_PET_LIST } from './../actions/actionTypes'

export const INITIAL_STATE = {
	pets: []
}

export default (state = INITIAL_STATE, action) => {
  //export default function internalTaskReducer(state = INITIAL_STATE, action) {
  //const { petName, breed, price } = action;
  let tempState;
  switch (action.type) {
    case INITIAL_ACTION:
			return state;
    case SET_PET_LIST:
      return { ...state, pets: action.petList };
    default:
      return state;
  }
}