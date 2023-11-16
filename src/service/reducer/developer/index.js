import { appActions } from "../../action";

const initialState = {
  devListLoading: false,
};

export const developerReducer = (state = initialState, action) => {
  switch (action.type) {
  //It will be removed from here, it is just for example, particular action will be place here
  case `${appActions.FORGET_PASSWORD}_START`:
    return { ...state, devListLoading: true };
  case `${appActions.FORGET_PASSWORD}_SUCCESS`:
    return { ...state, devListLoading: true };
  case `${appActions.FORGET_PASSWORD}_FAIL`:
    return { ...state, devListLoading: true };

    // Start Question
    case `${appActions.START_TEST}_START`:
      return { ...state, isStartTest: true };
    case `${appActions.START_TEST}_SUCCESS`:
      return { ...state, isStartTest: true ,testData:action?.payload};
    case `${appActions.START_TEST}_FAIL`:
      return { ...state, isStartTest: true };

  default:
    return { ...state };
  }
};
