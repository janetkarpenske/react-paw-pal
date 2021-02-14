import * as c from './../actions/actions';

export default (state = [], action) => {
  const { petName, breed, price } = action;
  let tempState;
  switch (action.type) {
    default:
      return state;
  }
}