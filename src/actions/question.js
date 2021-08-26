import * as types from "../constants/question";
import { _getQuestions } from "../api/index";

const getQuestionsRequest = (promise) => {
  return {
    type: types.GET_QUESTIONS_REQUEST,
    payload: promise,
  };
};

const getQuestionsFailed = (error) => {
  return {
    type: types.GET_QUESTIONS_FAILED,
    payload: error,
  };
};

const getQuestionsSuccess = (questions) => {
  return {
    type: types.GET_QUESTIONS_SUCCESS,
    payload: questions,
  };
};

export const getQuestions = () => {
  return (dispatch) => {
    const promise = _getQuestions();
    dispatch(getQuestionsRequest(promise));
    promise
      .then((questions) => {
        dispatch(getQuestionsSuccess(questions));
      })
      .catch((error) => {
        dispatch(getQuestionsFailed(error));
      });
    return promise;
  };
};
