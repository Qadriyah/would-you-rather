import * as types from "../constants/user";
import { _getUsers } from "../api/index";

const getUsersRequest = (promise) => {
  return {
    type: types.GET_USERS_REQUEST,
    payload: promise,
  };
};

const getUsersFailed = (error) => {
  return {
    type: types.GET_USERS_FAILED,
    payload: error,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: types.GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    const promise = _getUsers();
    dispatch(getUsersRequest(promise));
    promise
      .then((users) => {
        dispatch(getUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(getUsersFailed(error));
      });
    return promise;
  };
};
