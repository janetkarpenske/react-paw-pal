import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList(props){
  const { petList, onPetSelection, onAddNewPetButtonClicked } = props;
  console.log(petList)
  return (
    <React.Fragment>
      <h2 className="center-align">adoptable pets</h2>
      {/* <button onClick=() => {props.onAddNewPet()}>Add Pet</button> */}
      <button className="btn btn-outline-dark btn-md" onClick={ () => onAddNewPetButtonClicked() }>Add Pet</button>
      <hr/>
      {petList.pets.map((pet) => //petList is an object with an array of pets in it
        <Pet
        whenPetIsClicked = { onPetSelection }
        petName={pet.petName}
        breed={pet.breed}
        price={pet.price}
        image={pet.image}
        description={pet.description}
        id={pet.id}
        key={pet.id}/>
      )}
    </React.Fragment>
  );
}

PetList.propTypes = {
  petList: PropTypes.object,
  onPetSelection: PropTypes.func
};

export default PetList;