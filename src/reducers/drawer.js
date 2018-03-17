import { SHOW_DRAWER, HIDE_DRAWER } from '../actions/drawer';

const defaultState = {
  open: false,
};

export default function (state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case SHOW_DRAWER:
      return {
        ...state,
        open: true,
      };
    case HIDE_DRAWER:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
