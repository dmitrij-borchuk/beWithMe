import { get } from '../api/questions';

export const SET_QUESTIONS_LIST = 'SET_QUESTIONS_LIST';
export const setQuestionsList = list => ({
  type: SET_QUESTIONS_LIST,
  payload: list,
});

export const QUESTIONS_LIST_FETCHING_ERROR = 'QUESTIONS_LIST_FETCHING_ERROR';
export const QUESTIONS_LIST_FETCHING = 'QUESTIONS_LIST_FETCHING_ERROR';
export function getQuestionsList() {
  return async (dispatch) => {
    dispatch({
      type: QUESTIONS_LIST_FETCHING,
    });

    try {
      return setQuestionsList(await get());
    } catch (error) {
      return dispatch({
        type: QUESTIONS_LIST_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}
