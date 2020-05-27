import { Books } from 'store/types';

export interface StateProps {
  books: Books;
  booksLoaded: boolean;
}

export interface DispatchProps {
  fetchBooks: (page: number) => void;
}
