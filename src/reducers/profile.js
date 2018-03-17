import { SET_PROFILE } from '../actions/profile';

const defaultState = {
  email: null,
  firstName: null,
  gender: null,
  lastName: null,
  id: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstname,
        gender: action.payload.gender,
        lastName: action.payload.lastname,
        id: action.payload.user_id,
      };
    default:
      return state;
  }
}
