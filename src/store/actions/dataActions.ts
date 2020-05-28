import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from './actionsTypes';
import { Action, AsyncAction, QueryParams } from 'store/actions/types'
import { Books } from 'store/types';

const fetchBooksSucceeded: Action = (books: Books) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  books,
});

const fetchBooksFailed: Action = () => ({
  type: FETCH_BOOKS_FAILED,
});

export const fetchBooks = (params?: QueryParams): AsyncAction => dispatch => {
  let url = 'api/books';
  if (params) {
    const { page = '', name = '' } = params;
    url += `?page=${page}&name=${name}`;
  }

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(fetchBooksSucceeded(json)))
    .catch(error => {
      dispatch(fetchBooksFailed());
      console.log(error);
    });
};
