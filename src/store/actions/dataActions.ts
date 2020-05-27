import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from './actionsTypes';
import { State, Books, Dispatch } from 'store/types';

const fetchBooksSucceeded: ActionCreator<Action> = (books: Books) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  books,
});

const fetchBooksFailed: ActionCreator<Action> = () => ({
  type: FETCH_BOOKS_FAILED,
});

type AsyncAction = ThunkAction<void, State, unknown, Action>;

export const fetchBooks: ActionCreator<AsyncAction> = (page: number) => (dispatch: Dispatch) => {
  let url = `api/books`;
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
