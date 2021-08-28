import * as types from "../constants/user";
import { SAVE_USER_QUESTION_SUCCESS } from "../constants/question";

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

    case SAVE_USER_QUESTION_SUCCESS:
      const { author } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [author]: {
            ...state.users[author],
            questions: [
              ...state.users[author].questions,
              ...[action.payload.id],
            ],
          },
        },
      };

    default:
      return state;
  }
};

export default userReducer;
