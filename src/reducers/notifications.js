import { SET_QUESTIONS_LIST } from '../actions/questions';

const defaultState = {
  list: [{
    date: Date.now(),
    text: 'Some very long option text. Some very long option text. Some very long option text. Some very long option text. Some very long option text. ',
    id: 1,
    isDone: false,
  }, {
    date: Date.now() + 864000000,
    text: 'Some notification',
    id: 2,
    isDone: true,
  }],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_QUESTIONS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
