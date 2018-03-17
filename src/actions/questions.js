import { get } from '../api/questions';

export const SET_QUESTIONS_LIST = 'SET_QUESTIONS_LIST';
export const setQuestionsList = list => ({
  type: SET_QUESTIONS_LIST,
  payload: list,
});

export const SET_QUESTIONS_LIST_FETCHING_ERROR = 'SET_QUESTIONS_LIST_FETCHING_ERROR';
export const SET_QUESTIONS_LIST_FETCHING = 'SET_QUESTIONS_LIST_FETCHING_ERROR';
export function getQuestionsList() {
  return async (dispatch) => {
    dispatch({
      type: SET_QUESTIONS_LIST_FETCHING,
    });

    try {
      return setQuestionsList(await get());
    } catch (error) {
      return dispatch({
        type: SET_QUESTIONS_LIST_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}
