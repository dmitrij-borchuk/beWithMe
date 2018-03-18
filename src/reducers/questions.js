import {
  SET_QUESTIONS_LIST,
  SET_PARTNERS_LIKES_LIST,
} from '../actions/questions';

function parseData(data) {
  return {
    text: data.question_text,
    id: data.question_id,
    options: data.f_options_list,
  };
}
function parseLikes(data) {
  return {
    favoriteItemId: data.favoriteitem_id,
    howOften: data.how_often,
    lastDate: data.last_date,
    lastQuestion: data.last_question,
    reminder: data.reminder,
  };
}

const defaultState = {
  list: [],
  partnersLikes: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_QUESTIONS_LIST:
      return {
        ...state,
        list: action.payload.map(parseData),
      };
    case SET_PARTNERS_LIKES_LIST:
      return {
        ...state,
        partnersLikes: action.payload.map(parseLikes),
      };
    default:
      return state;
  }
}
