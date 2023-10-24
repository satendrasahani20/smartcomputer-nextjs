import { appActions } from "../../action";

const initialState = {
  courseData: {},
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    //It will be removed from here, it is just for example, particular action will be place here
    case `${appActions.GET_ADMIN_COURSE}_START`:
      return { ...state, isCourseLoading: true };
    case `${appActions.GET_ADMIN_COURSE}_SUCCESS`:
      return { ...state, isCourseLoading: false, courseData: action?.payload };
    case `${appActions.GET_ADMIN_COURSE}_FAIL`:
      return { ...state, isCourseLoading: false };

    case `${appActions.GET_MODULE_ACTION}_START`:
      return { ...state, isModuleLoading: true };
    case `${appActions.GET_MODULE_ACTION}_SUCCESS`:
      return { ...state, isModuleLoading: false, moduleData: action?.payload };
    case `${appActions.GET_MODULE_ACTION}_FAIL`:
      return { ...state, isModuleLoading: false };

    case `${appActions.GET_QUETIONS_ACTION}_START`:
      return { ...state, isQuestionLoading: true };
    case `${appActions.GET_QUETIONS_ACTION}_SUCCESS`:
      return {
        ...state,
        isQuestionLoading: false,
        questionData: action?.payload,
      };
    case `${appActions.GET_QUETIONS_ACTION}_FAIL`:
      return { ...state, isQuestionLoading: false };

    case `${appActions.UPDATE_ADMIN_QUESTION}_START`:
      return { ...state, isUpdateQuestion: true };
    case `${appActions.UPDATE_ADMIN_QUESTION}_SUCCESS`:
      return {
        ...state,
        isUpdateQuestion: false,
      };
    case `${appActions.UPDATE_ADMIN_QUESTION}_FAIL`:
      return { ...state, isUpdateQuestion: false };

    case `${appActions.ADD_ADMIN_QUESTION}_START`:
      return { ...state, isAddNewQuestion: true };
    case `${appActions.ADD_ADMIN_QUESTION}_SUCCESS`:
      return {
        ...state,
        isAddNewQuestion: false,
      };
    case `${appActions.ADD_ADMIN_QUESTION}_FAIL`:
      return { ...state, isAddNewQuestion: false };


      case `${appActions.UPDATE_ADMIN_MODULE}_START`:
        return { ...state, isUpdateModule: true };
      case `${appActions.UPDATE_ADMIN_MODULE}_SUCCESS`:
        return {
          ...state,
          isUpdateModule: false,
        };
      case `${appActions.UPDATE_ADMIN_MODULE}_FAIL`:
        return { ...state, isUpdateModule: false };

        case `${appActions.ADD_ADMIN_MODULE}_START`:
          return { ...state, isAddModule: true };
        case `${appActions.ADD_ADMIN_MODULE}_SUCCESS`:
          return {
            ...state,
            isAddModule: false,
          };
        case `${appActions.ADD_ADMIN_MODULE}_FAIL`:
          return { ...state, isAddModule: false };

      

    default:
      return { ...state };
  }
};
