import { StateProps, DispatchProps } from 'containers/BooksContainer/types';

export type BooksProps = StateProps & DispatchProps;

export interface FiltersParams {
  name: string;
}
