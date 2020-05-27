import { connect } from 'react-redux';

import BooksList from 'components/BooksList';
import { fetchBooks } from 'store/actions/dataActions';
import {
  getBooksSelector,
  getBooksLoadedSelector,
} from 'store/selectors';
import { State, Dispatch } from 'store/types';

import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: State): StateProps => ({
  books: getBooksSelector(state),
  booksLoaded: getBooksLoadedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchBooks: (page: number) => dispatch<any>(fetchBooks(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
