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

export const registerNewStudent = (payload) => ({
  type: appActions.STUDENT_REGSITER,
  payload,
});
export const updateStudentAction = (payload) => ({
  type: appActions.UPDATE_STUDENT,
  payload,
});

export const getStudentListsAction = payload => ({
  type: appActions.STUDENT_LISTS,
  payload,
});

export const deleteStudentAction = payload => ({
  type: appActions.DELETE_STUDENT,
  payload,
});

export const registerCentreAction = payload => ({
  type: appActions.ADD_CENTRE,
  payload,
});

export const getCentreAction = payload => ({
  type: appActions.GET_CENTRE,
  payload,
});
export const updateCentreAction = (payload) => ({
  type: appActions.UPDATE_CENTRE,
  payload,
});
export const deleteCentreAction = payload => ({
  type: appActions.DELETE_CENTRE,
  payload,
});
export const getAllCertificate=payload=>({
  type: appActions.GET_ALL_CERTIFICATE,
  payload,
})
export const directResultUpdateAction=payload=>({
  type: appActions.DIRECT_RESULT_UPDATE,
  payload,
})

export const updateCertificateAction=payload=>({
  type: appActions.UPDATE_CERTIFICATE,
  payload,
})

