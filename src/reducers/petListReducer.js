//import * as c from './../actions/actions';
import { INITIAL_ACTION, SET_PET_LIST } from './../actions/actionTypes'

export const INITIAL_STATE = {
	pets: [{petName: "Albert", breed: "Dog", price: 550, image: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", description: "Albert is a furry little fuzzball who likes chasing his frisbee and leaving skidmarks across carpets. He is for adoption because he smells like a large poo.", id: "1"}]
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