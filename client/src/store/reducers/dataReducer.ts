import { AnyAction } from 'redux';

import { FETCH_BOOKS_SUCCEEDED } from 'store/actions/actionsTypes';

const initialState = {
  books: {
    items: [],
    genres: [],
    pageCount: 0,
  },
}

const dataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCEEDED:
      return {
        books: action.books,
      }
    default:
      return state;
  }
};

export default dataReducer;
