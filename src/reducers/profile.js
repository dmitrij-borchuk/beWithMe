import { SET_PROFILE } from '../actions/profile';

const defaultState = {
  profile: {
    id: 0,
    name: "Anonymous",
    gender: null,
    birthday: Date().toString(),
    match: null,
    avatar: "http://www.dcc-marketing.com/wp-content/uploads/2015/02/anonyme_18.jpg",
  },
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
