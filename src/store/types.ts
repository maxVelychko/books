import { Dispatch as ReduxDispatch } from 'redux';

export type Dispatch = ReduxDispatch;

export interface Book {
  name: string;
  genre: string;
  date: string;
  image: string;
  author: {
    name: string;
    gender: string;
  }
}

export type Books = {
  items: Book[];
  pageCount: number;
};

interface Data {
  books: Books;
}

interface Loaders {
  booksLoaded: boolean;
}

export interface State {
  data: Data;
  loaders: Loaders;
}
