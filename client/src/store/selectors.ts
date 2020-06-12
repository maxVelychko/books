import { State, Books } from 'store/types';

export const getBooksSelector = (state: State): Books => state.data.books;
export const getBooksLoadedSelector = (state: State): boolean => state.loaders.booksLoaded;
