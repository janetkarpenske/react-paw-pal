import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import {firebase} from './firebase';
import * as c from './actions/actionTypes';
import * as actions from './actions/Index';



// function* deleteTask() {
//   yield put({type: 'DELETE_TASK_ASYNC'})
// }
// function* toggleFormAsync() {
//   yield put({type: 'TOGGLE_FORM_ASYNC'})
// }
// //bug occurs when you click on edit and try to go back. Doesn't toggle form back off.
// function* toggleEditAsync() {
//   yield put({type: 'TOGGLE_EDIT_ASYNC'})
// }
// function* nullTaskAsync() {
//   yield put({type: 'SET_TASK_NULL_ASYNC'})
// }
// function* fetchRequestedAsync() {
//   yield put({type: 'FETCH_REQUESTED_ASYNC'})
// }
// function* selectTask(selectedTask) {
//   console.log("In saga: " + selectedTask)
//   yield put({type: 'SELECT_TASK_ASYNC'})
// }
function* fetchPetList() {
  console.log("WE in fetchTaskList")
  let petListRef = firebase.firestore.collection('petListings')
  //let taskListRef = firebaseInst.get({collection: 'tasks', doc: id})
  let petListQuery = yield call(
    {
      fn: petListRef.get,  
      context: petListRef
    }
  )
  // let taskList = taskListQuery.docs.map(doc => doc.data())
  //Below: We had to tell it to include the doc.id from firestore
  let petList = petListQuery.docs.map(doc => ({...doc.data(), id: doc.id}))
  console.log("Pet list:", petList)
  yield put(actions.setPetList(petList));
}

// function* deleteTaskFromDb(id) {
//   //function should delete task from firestore. Get the new list from firestore, and then set the task list in store equal to to the new list.
//   let taskListRef = firebaseInst.firestore.collection('tasks')
//   let taskListQuery = yield call(
//     {
//       fn: taskListRef.delete({collection: 'tasks', doc: id}),  
//       context: taskListRef
//     }
//   )
//   let taskList = taskListQuery.docs.map(doc => ({...doc.data(), id: doc.id}))
//   console.log(taskList)
//   yield put(actions.setTaskList(taskList));
// }



export function* mySagas() {
  yield all([
    //takeEvery(c.SELECT_TASK_ASYNC, selectTask),
    //takeEvery(c.DELETE_TASK, deleteTaskFromDb),
    //takeEvery('TOGGLE_FORM', toggleFormAsync),
    //takeEvery('TOGGLE_EDIT', toggleEditAsync),
    //takeEvery('SET_TASK_NULL', nullTaskAsync),
    takeEvery(c.FETCH_PET_LIST, fetchPetList),
  ])
}