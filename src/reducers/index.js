import formVisibleReducer from './formVisibleReducer';
import petListReducer from './petListReducer';
import editingReducer from './editingReducer';
import petSelectReducer from './petSelectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPetList: petListReducer,
  editing: editingReducer,
  selectedPet: petSelectReducer,
  firestore: firestoreReducer
});

export default rootReducer;