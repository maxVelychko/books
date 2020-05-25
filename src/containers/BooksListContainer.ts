import { connect } from 'react-redux';

import BooksList from 'components/BooksList';
import { fetchBooks } from 'store/actions/dataActions';
import {
  getBooksSelector,
  getBooksLoadedSelector,
} from 'store/selectors';
import { State, Dispatch } from 'store/types';

import { StateProps } from './types';

const mapStateToProps = (state: State): StateProps => ({
  books: getBooksSelector(state),
  booksLoaded: getBooksLoadedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  // @ts-ignore
  fetchBooks: (page: number) => dispatch(fetchBooks(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
