import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from './actionsTypes';
import { Action, AsyncAction, FetchBooksParams } from 'store/actions/types'
import { Books } from 'store/types';
import { initialSelectOption } from 'constants/filters';

const fetchBooksSucceeded: Action = (books: Books) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  books,
});

const fetchBooksFailed: Action = () => ({
  type: FETCH_BOOKS_FAILED,
});

export const fetchBooks = (params?: FetchBooksParams): AsyncAction => dispatch => {
  let url = 'api/books';
  if (params) {
    const { page = '', name = '', genre = '' } = params;
    const genreFormatted = genre === initialSelectOption ? '' : genre;
    url += `?page=${page}&name=${name}&genre=${genreFormatted}`;
  }

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(fetchBooksSucceeded(json)))
    .catch(error => {
      dispatch(fetchBooksFailed());
      console.log(error);
    });
};
