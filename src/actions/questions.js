import {
  get,
  getPartnersLikes,
  sendAnswer,
} from '../api/questions';

export const SET_QUESTIONS_LIST = 'SET_QUESTIONS_LIST';
export const setQuestionsList = list => ({
  type: SET_QUESTIONS_LIST,
  payload: list,
});

export const QUESTIONS_LIST_FETCHING_ERROR = 'QUESTIONS_LIST_FETCHING_ERROR';
export const QUESTIONS_LIST_FETCHING = 'QUESTIONS_LIST_FETCHING';
export function getQuestionsList(id) {
  return async (dispatch) => {
    dispatch({
      type: QUESTIONS_LIST_FETCHING,
    });

    try {
      const response = await get(id);
      return dispatch(setQuestionsList(response.body));
    } catch (error) {
      return dispatch({
        type: QUESTIONS_LIST_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}

export const SET_PARTNERS_LIKES_LIST = 'SET_PARTNERS_LIKES_LIST';
export const setPartnerLikesList = list => ({
  type: SET_PARTNERS_LIKES_LIST,
  payload: list,
});

export const PARTNERS_LIKES_LIST_FETCHING_ERROR = 'PARTNERS_LIKES_LIST_FETCHING_ERROR';
export const PARTNERS_LIKES_LIST_FETCHING = 'PARTNERS_LIKES_LIST_FETCHING';
export function getPartnerLikesList(id) {
  return async (dispatch) => {
    dispatch({
      type: PARTNERS_LIKES_LIST_FETCHING,
    });

    try {
      const response = await getPartnersLikes(id);
      return dispatch(setPartnerLikesList(response.body));
    } catch (error) {
      return dispatch({
        type: PARTNERS_LIKES_LIST_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}

export function setAnswer(id, data) {
  return async () => {
    try {
      return await sendAnswer(id, data);
    } catch (error) {
      throw new Error(error);
    }
  };
}
