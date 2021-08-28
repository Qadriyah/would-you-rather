import * as types from "../constants/login";

export const loginUser = (userId) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: userId,
  };
};

export const logOut = () => {
  return {
    type: types.LOG_OUT,
    payload: null,
  };
};
