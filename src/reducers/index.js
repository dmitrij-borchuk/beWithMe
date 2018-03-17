import { combineReducers } from 'redux';
import questions from './questions';
import notifications from './notifications';
import drawer from './drawer';

export default combineReducers({
  questions,
  notifications,
  drawer,
});
