import { AnyAction } from 'redux';

import { FETCH_BOOKS_SUCCEEDED } from 'store/actions/actionsTypes';

const initialState = {
  books: {
    items: [],
    pagination: {},
  },
}

const dataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCEEDED:
      return {
        ...state,
        books: action.books,
      }
    default:
      return state;
  }
};

export default dataReducer;
