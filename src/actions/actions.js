import * as c from './actionTypes';

//export const INITIAL_ACTION = 'INITIAL_ACTION';

export const initialAction = ({
  type: c.INITIAL_ACTION
})

export const fetchPetList = () => ({
  type: c.FETCH_PET_LIST
})

export const setPetList = (petList) => ({
  type: c.SET_PET_LIST,
  petList
})

export const selectPet = (id, petName, price, breed, description) => ({
  type: c.SELECT_PET,
  id, petName, price, breed, description
})


export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

// export const deletePet = id => ({
//   type: 'DELETE_PET',
//   id
// });

// export const addPet = (pet) => {
//   const { petName, breed, price, image, description } = pet;
//   return {
//     type: 'ADD_PET',
//     petName,
//     breed,
//     price,
//     image,
//     description
//   }
// }

// export const editPet = (pet) => {
//   const { petName, breed, price, image, description, id } = pet;
//   return {
//     type: 'EDIT_PET',
//     petName,
//     breed,
//     price,
//     image,
//     description,
//     id
//   }
// }
