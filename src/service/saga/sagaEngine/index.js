import { put, call } from "redux-saga/effects";
import { appActions } from "../../action";
import { appApi } from "../../api";
import { Toaster } from "@/components/common/toaster/Toaster";

export function* sagaEngine({ type, payload }) {

  try {
    yield put({ type: `${appActions[type]}_START` });
    const response = yield call(appApi[type], payload);
    payload?.cb && payload.cb(response?.data);
    yield put({
      type: `${appActions[type]}_SUCCESS`,
      payload: response.data,
    });
  } catch (error) {
    Toaster.error(error?.message);
    if (error?.response?.status === 401) {
      yield put({ type: `${appActions[type]}_FAIL` });
      payload.push && payload.push("/login");
    }
    payload?.cb && payload.cb(error?.response)
   
    yield put({ type: `${appActions[type]}_FAIL` });
  }
}
