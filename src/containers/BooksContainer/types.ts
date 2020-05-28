import { Books } from 'store/types';
import { QueryParams } from 'store/actions/types';

export interface StateProps {
  books: Books;
  booksLoaded: boolean;
}

export interface DispatchProps {
  fetchBooks: (params: QueryParams) => void;
}
