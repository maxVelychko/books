import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const getStore = (): Store => {
  const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

  return createStore(rootReducer, composedEnhancers);
}

export default getStore;
