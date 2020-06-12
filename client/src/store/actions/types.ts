import { AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { State } from 'store/types';

export type Action = ActionCreator<AnyAction>;

export type AsyncAction = ThunkAction<void, State, unknown, AnyAction>;

export interface FetchBooksParams {
  page?: number;
  name?: string;
  genre?: string;
};
