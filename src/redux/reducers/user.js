import * as types from "../constants/user";

const initialState = {
  loading: false,
  error: null,
  users: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
