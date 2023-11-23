import { appActions } from "../../action";

export const getCourseAction = () => ({
  type: appActions.GET_STUDENT_COURSE,
  payload: null,
});
export const startTestAction = (payload) => ({
  type: appActions.START_TEST,
  payload,
});
export const updateTestActivty = (payload) => ({
  type: appActions.UPDATE_TEST_ACTIVTY,
  payload,
});

export const saveResultAction=(payload)=>({
  type: appActions.SAVE_RESULT,
  payload,
})

export const getResultAction=(payload)=>({
  type: appActions.GET_RESULT,
  payload,
})