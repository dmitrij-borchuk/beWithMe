import { get } from '../api/profile';

export const SET_PROFILE = 'SET_PROFILE';
export const setProfile = profile => ({
  type: SET_PROFILE,
  payload: profile,
});

export const PROFILE_FETCHING_ERROR = 'PROFILE_FETCHING_ERROR';
export const PROFILE_FETCHING = 'PROFILE_FETCHING';
export function getProfile(id) {
  return async (dispatch) => {
    dispatch({
      type: PROFILE_FETCHING,
    });

    try {
      const response = await get(id);
      return dispatch(setProfile(response.body));
    } catch (error) {
      return dispatch({
        type: PROFILE_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}
