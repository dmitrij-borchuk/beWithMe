import { SET_QUESTIONS_LIST } from '../actions/questions';

const defaultState = {
  list: [{
    date: Date.now(),
    text: 'It’s time to take Alice some Italian cousine',
    id: 1,
    isDone: false,
    url: 'http://via.placeholder.com/150x150',
    type: 'Notifier',
  }, {
    date: Date.now() + 864000000,
    text: 'Some notification',
    id: 2,
    isDone: true,
  }, {
    date: Date.now() + (864000000 * 2),
    text: 'Some notification',
    id: 3,
    isDone: false,
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
