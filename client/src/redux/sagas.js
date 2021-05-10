import { put, call, takeLatest, all, takeEvery, cancel} from "redux-saga/effects";
import { FETCH_LINKS, REQUEST_LINKS, REQUEST_DETAILS, FETCH_DETAILS } from "./types";
import { showLoader, hideLoader, showAlert, hideAlert } from "./actions";
import store from "..";

export function* rootSaga() {
  console.log("work")
  yield all([
    takeLatest(REQUEST_LINKS, sagaWorkerLinks), 
    takeLatest(REQUEST_DETAILS, sagaWorkerDetails), 
  ])
}
/*
function* sagaWatcherLinks() {
  yield takeLatest(REQUEST_LINKS, sagaWorkerLinks);
}

function* sagaWatcherDetails() {
  yield takeLatest(REQUEST_DETAILS, sagaWorkerDetails);
}
*/
function* sagaWorkerLinks() {
  //console.log(store.getState().currPath,"kjhkg")
  try {
    yield put(hideAlert());
    yield put(showLoader());
    const payload = yield call(fetchLinks);
    yield put({ type: FETCH_LINKS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());  
    yield put(showAlert());
    //throw new Error(e.message);   
  }
}

async function fetchLinks() {
  const response = await fetch(
    "http://localhost:7070/api/services"
  );
  return await response.json();
}



function* sagaWorkerDetails() {
  console.log(store.getState().currPath,"workDetail")
  try {
    yield put(hideAlert());
    yield put(showLoader());
    const payload = yield call(fetchDetails);
    console.log(payload,"details")
    yield put({ type: FETCH_DETAILS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());  
    yield put(showAlert());
    //throw new Error(e.message);   
  }
}

async function fetchDetails() {
  
  const response = await fetch(
    `http://localhost:7070/api/services/${store.getState().currPath}`
  );
  return await response.json();
}