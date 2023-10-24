import { appActions } from "../../action";

export const getDevSpotLightOpen = () => ({
  type: appActions.OPEN_CANDIDATE_LISTS,
  payload: null,
});
export const getDevSpotLightCompany = () => ({
  type: appActions.OPEN_COMPANY_PROFILE,
  payload: null,
});
export const getJobLists=(pageType,pageData)=>({
  type: appActions.JOB_LISTS,
  payload: {pageType,pageData},
});
export const getUser=payload=>({
  type: appActions.GET_USER,
  payload
});
