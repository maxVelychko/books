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

type AsyncAction = ThunkAction<void, State, unknown, Action<string>>;

export const fetchBooks = (page: number): AsyncAction => (dispatch: Dispatch) => {
  let url = 'api/books';
  if (page) {
    url += `?page=${page}`;
  }

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(fetchBooksSucceeded(json)))
    .catch(error => {
      dispatch(fetchBooksFailed());
      console.log(error);
    });
}
