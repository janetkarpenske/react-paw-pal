
export const deletePet = id => ({
  type: 'DELETE_PET',
  id
});

export const addPet = (pet) => {
  const { petName, breed, price, image, description } = pet;
  return {
    type: 'ADD_PET',
    petName,
    breed,
    price,
    image,
    description
  }
}

export const editPet = (pet) => {
  const { petName, breed, price, image, description, id } = pet;
  return {
    type: 'EDIT_PET',
    petName,
    breed,
    price,
    image,
    description,
    id
  }
}
