import { takeEvery, takeLatest } from "redux-saga/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
  // Object.keys(appActions).map(function* (item) {
  //   Yield takeLatest(item, sagaEngine);
  // });
  yield takeLatest(appActions.LOGIN, sagaEngine);
  yield takeLatest(appActions.SIGN_UP, sagaEngine);
  yield takeLatest(appActions.OPEN_CANDIDATE_LISTS, sagaEngine);
  yield takeLatest(appActions.JOB_LISTS,sagaEngine);
  yield takeLatest(appActions.OPEN_COMPANY_PROFILE,sagaEngine);
  yield takeEvery(appActions.FORGET_PASSWORD,sagaEngine)
  yield takeEvery(appActions.GET_USER,sagaEngine)


  // admin
  yield takeEvery(appActions.GET_ADMIN_COURSE,sagaEngine);
  yield takeEvery(appActions.ADD_ADMIN_COURSE,sagaEngine)
  yield takeEvery(appActions.UPDATE_ADMIN_COURSE,sagaEngine);
  yield takeEvery(appActions.GET_MODULE_ACTION,sagaEngine)
  yield takeEvery(appActions.GET_QUETIONS_ACTION,sagaEngine)
   yield takeEvery(appActions.UPDATE_ADMIN_MODULE,sagaEngine)
  yield takeEvery(appActions.ADD_ADMIN_MODULE,sagaEngine)
  yield takeEvery(appActions.ADD_ADMIN_QUESTION,sagaEngine)
  yield takeEvery(appActions.UPDATE_ADMIN_QUESTION,sagaEngine)
  yield takeEvery(appActions.DELETE_ADMIN_QUESTION,sagaEngine)
  yield takeEvery(appActions.STUDENT_REGSITER,sagaEngine)
  yield takeEvery(appActions.STUDENT_LISTS,sagaEngine)
  yield takeEvery(appActions.UPDATE_STUDENT,sagaEngine)
  yield takeEvery(appActions.DELETE_STUDENT,sagaEngine)
  
  // common
  yield takeEvery(appActions.UPLOAD_IMAGE,sagaEngine)
  
  
}

export default mySaga;
