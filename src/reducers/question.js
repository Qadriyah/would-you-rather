import * as types from "../constants/question";

const initialState = {
  loading: false,
  error: null,
  questions: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_QUESTIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };

    case types.SAVE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SAVE_QUESTION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SAVE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: { ...state.questions },
      };

    default:
      return state;
  }
};

export default questionReducer;
