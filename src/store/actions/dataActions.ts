import { FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED } from './actionsTypes';
import { Action, AsyncAction, FetchBooksParams } from 'store/actions/types'
import { Books, Dispatch } from 'store/types';
import { initialSelectOption } from 'constants/filters';
import delayFuncExecution from 'helpers/delayFuncExecution';

const fetchBooksSucceeded: Action = (books: Books) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  books,
});

const fetchBooksFailed: Action = () => ({
  type: FETCH_BOOKS_FAILED,
});

export const fetchBooks = (params?: FetchBooksParams, hasDelay?: boolean): AsyncAction => dispatch => {
  if (hasDelay) {
    requestBooksDelayed(params, dispatch);
  } else {
    requestBooks(params, dispatch);
  }
};

const requestBooksDelayed = delayFuncExecution(requestBooks, 250);

// @ts-ignore
function requestBooks(params?: FetchBooksParams, dispatch) {
  let url = 'api/books';
  if (params) {
    const { page = '', name = '', genre = '' } = params;
    const genreFormatted = genre === initialSelectOption ? '' : genre;
    url += `?page=${page}&name=${name}&genre=${genreFormatted}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(json => dispatch(fetchBooksSucceeded(json)))
    .catch(error => {
      dispatch(fetchBooksFailed());
      console.log(error);
    });
};
