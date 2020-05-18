import { AnyAction } from 'redux';

import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from 'store/actions/actionsTypes';

const initialState = {
  booksLoaded: false,
}

const loadersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCEEDED:
    case FETCH_BOOKS_FAILED:
      return {
        booksLoaded: true,
      }
    default:
      return state;
  }
};

export default loadersReducer;
