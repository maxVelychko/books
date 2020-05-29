import { Books } from 'store/types';
import { FetchBooksParams } from 'store/actions/types';

export interface StateProps {
  books: Books;
  booksLoaded: boolean;
}

export interface DispatchProps {
  fetchBooks: (params: FetchBooksParams) => void;
}
