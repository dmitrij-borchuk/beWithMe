import { combineReducers } from 'redux';
import questions from './questions';
import notifications from './notifications';

export default combineReducers({
  questions,
  notifications,
});
