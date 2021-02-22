import * as c from './../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case c.SELECT_PET:
      const tempSelectedPet = action.selectedPet
      return tempSelectedPet;

    case c.SET_PET_NULL:
      state = null;
      return state;
    default:
      return state;
  }
};