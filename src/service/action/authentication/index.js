import { appActions } from "../../action";

export const loginAction = payload => ({
  type: appActions.LOGIN,
  payload,
});

export const signUpAction = payload => ({
  type: appActions.SIGN_UP,
  payload
});

export const forgetPasswordAction =payload=> ({
  type: appActions.FORGET_PASSWORD,
  payload
});

export const resetPasswordAction = payload => ({
  type: appActions.RESET_PASSWORD,
  payload
});

export const logoutAction = payload=> ({
  type: appActions.LOGOUT,
  payload
});

export const emailVerificationAction = (navigate, params, setColorName) => ({
  type: appActions.EMAIL_VERIFICATION,
  navigate,
  payload: { params, setColorName },
});

export const resendEmailVerificationAction = (navigate, email, reset) => ({
  type: appActions.RESEND_EMAIL_VERIFICATION,
  navigate,
  payload: { email, reset },
});
