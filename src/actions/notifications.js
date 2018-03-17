import { get } from '../api/notifications';

export const SET_NOTIFICATIONS_LIST = 'SET_NOTIFICATIONS_LIST';
export const setNotificationList = list => ({
  type: SET_NOTIFICATIONS_LIST,
  payload: list,
});

export const NOTIFICATIONS_LIST_FETCHING_ERROR = 'NOTIFICATIONS_LIST_FETCHING_ERROR';
export const NOTIFICATIONS_LIST_FETCHING = 'NOTIFICATIONS_LIST_FETCHING';
export function getNotificationList() {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATIONS_LIST_FETCHING,
    });

    try {
      return dispatch(setNotificationList(await get()));
    } catch (error) {
      return dispatch({
        type: NOTIFICATIONS_LIST_FETCHING_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}

export const NOTIFICATION_MARK_AS_DONE_FETCHING = 'NOTIFICATION_MARK_AS_DONE_FETCHING';
export const NOTIFICATION_MARK_AS_DONE_ERROR = 'NOTIFICATION_MARK_AS_DONE_ERROR';
export function setNotificationAsDone() {
  return async (dispatch) => {
    dispatch({
      type: NOTIFICATION_MARK_AS_DONE_FETCHING,
    });

    try {
      return dispatch(getNotificationList());
    } catch (error) {
      return dispatch({
        type: NOTIFICATION_MARK_AS_DONE_ERROR,
        payload: error,
        error: true,
      });
    }
  };
}
