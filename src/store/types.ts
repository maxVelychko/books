import { Dispatch as ReduxDispatch } from 'redux';

export type Dispatch = ReduxDispatch;

interface Book {
  name: string;
  genre: string;
  date: string;
  image: string;
  author: {
    name: string;
    gender: string;
  }
}

export type Books = Book[];

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
