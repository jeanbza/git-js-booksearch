import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';

const rootReducer = combineReducers({
  counter, search
});

export default rootReducer;
