import { appActions } from "../../action";

export const getCourse = (payload) => ({
  type: appActions.GET_ADMIN_COURSE,
  payload,
});
export const addCourseAction = (payload) => ({
  type: appActions.ADD_ADMIN_COURSE,
  payload,
});
export const updateCourseAction = (payload) => ({
  type: appActions.UPDATE_ADMIN_COURSE,
  payload,
});
export const getModulesAction = (payload) => ({
  type: appActions.GET_MODULE_ACTION,
  payload,
});

export const getQuestionsAction = (payload) => ({
  type: appActions.GET_QUETIONS_ACTION,
  payload,
});

export const addModuleAction = (payload) => ({
  type: appActions.ADD_ADMIN_MODULE,
  payload,
});
export const updateModuleAction = (payload) => ({
  type: appActions.UPDATE_ADMIN_MODULE,
  payload,
});
export const addQuestionAction = (payload) => ({
  type: appActions.ADD_ADMIN_QUESTION,
  payload,
});
export const updateQuestionAction = (payload) => ({
  type: appActions.UPDATE_ADMIN_QUESTION,
  payload,
});
export const deleteQuestionAction = (payload) => ({
  type: appActions.DELETE_ADMIN_QUESTION,
  payload,
});

