import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList(props){
  const { petList, onPetSelection } = props;
  return (
    <React.Fragment>
      <h2 className="center-align">adoptable pets</h2>
      <hr/>
      {petList.map((pet) =>
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

// PetList.propTypes = {
//   petList: PropTypes.object,
//   onPetSelection: PropTypes.func
// };

export default PetList;