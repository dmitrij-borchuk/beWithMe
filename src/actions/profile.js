import { get } from '../api/profile';

export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

export const PROFILE_FETCHING_ERROR = 'PROFILE_FETCHING_ERROR';
export const PROFILE_FETCHING = 'PROFILE_FETCHING';
export function getNotificationList() {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_FETCHING,
    });

    try {
      return dispatch(setProfile(await get()));
    } catch (error) {
      return dispatch({
        type: PROFILE_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}
