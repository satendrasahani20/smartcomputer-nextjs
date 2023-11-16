import { appActions } from "../../action";

const initialState = {
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
  //It will be removed from here, it is just for example, particular action will be place here
  case `${appActions.GET_STUDENT_COURSE}_START`:
    return { ...state, courseLoading: true };
  case `${appActions.GET_STUDENT_COURSE}_SUCCESS`:
    return { ...state, courseLoading: true ,studentCourses:action?.payload?.courseDetail};
  case `${appActions.GET_STUDENT_COURSE}_FAIL`:
    return { ...state, courseLoading: true };

  default:
    return { ...state };
  }
};
