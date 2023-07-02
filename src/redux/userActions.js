export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT="LOGOUT"
export const loginSuccessAction = (userEmail) => {

 return { type: LOGIN_SUCCESS,payload:userEmail };
};
export const logoutAction = () => {
  return {
    type: LOGOUT
  };
};


export const loginErrorAction = (errorMessage) => {
  return { type: LOGIN_ERROR, payload: errorMessage };
};