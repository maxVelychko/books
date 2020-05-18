import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import loadersReducer from './loadersReducer';

export default combineReducers({
  data: dataReducer,
  loaders: loadersReducer,
});
