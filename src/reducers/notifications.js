import { SET_NOTIFICATIONS_LIST } from '../actions/notifications';

const parseData = data => ({
  isDone: data.done,
  text: data.notifications_text,
  date: data.start_date,
});
const defaultState = {
  list: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_NOTIFICATIONS_LIST:
      return {
        ...state,
        list: action.payload.map(parseData),
      };
    default:
      return state;
  }
}
