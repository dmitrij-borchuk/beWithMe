import { SET_QUESTIONS_LIST } from '../actions/questions';

const defaultState = {
  list: [{
    text: 'Some very long question? Some very long question? Some very long question? Some very long question? Some very long question? Some very long question? Some very long question? Some very long question?',
    options: [{
      text: 'Some very long option text. Some very long option text. Some very long option text. Some very long option text. Some very long option text. ',
      url: 'http://via.placeholder.com/150x150',
      id: 1,
    }],
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
