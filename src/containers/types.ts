import { Books } from 'store/types';

export interface StateProps {
  books: Books;
  booksLoaded: boolean;
}
