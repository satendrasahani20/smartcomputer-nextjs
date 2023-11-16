import { combineReducers } from "redux";
import { adminReducer } from "./admin";
import { authenticationReducer } from "./authentication";
import { commonReducer } from "./common";
import { developerReducer } from "./developer";
import { studentReducer } from "./student/index";

const appReducer = combineReducers({
  adminReducer,
  authenticationReducer,
  commonReducer,
  developerReducer,
  studentReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
