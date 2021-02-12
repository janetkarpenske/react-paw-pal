import React from 'react';
import Pet from './Pet';
import PropTypes from 'prop-types';

function PetList(props){
  return (
    <React.Fragment>
      <h2 className="center-align">adoptable pets</h2>
      <hr/>
      {Object.values(props.petList).map((pet) =>
        <Pet
        whenKegIsClicked = { props.onKegSelection }
        name={pet.petName}
        brand={pet.breed}
        price={pet.price}
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