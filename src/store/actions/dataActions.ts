import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from './actionsTypes';
import { State, Books, Dispatch } from 'store/types';

const fetchBooksSucceeded = (books: Books): AnyAction => ({
  type: FETCH_BOOKS_SUCCEEDED,
  books,
});

const fetchBooksFailed = (): AnyAction => ({
  type: FETCH_BOOKS_FAILED,
});

export const fetchBooks = (): ThunkAction<void, State, unknown, Action<string>> => (dispatch: Dispatch) => {
  return fetch('api/books')
    .then(response => response.json())
    .then(json => dispatch(fetchBooksSucceeded(json)))
    .catch(error => {
      dispatch(fetchBooksFailed());
      console.log(error);
    });
}
