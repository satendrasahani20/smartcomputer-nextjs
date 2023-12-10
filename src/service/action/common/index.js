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
export const uploadImageAction=payload=>({
  type: appActions.UPLOAD_IMAGE,
  payload
});
export const clearImageAction=payload=>({
  type: appActions.CLEAR_IMAGE,
  payload
});
export const getCertificateOpenAction=payload=>({
  type: appActions.GET_CERTIFICATE_OPEN,
  payload
});