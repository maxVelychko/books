import { connect } from 'react-redux';

import Books from 'components/Books';
import { fetchBooks } from 'store/actions/dataActions';
import { getBooksSelector, getBooksLoadedSelector } from 'store/selectors';
import { State, Dispatch } from 'store/types';

import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: State): StateProps => ({
  books: getBooksSelector(state),
  booksLoaded: getBooksLoadedSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  fetchBooks: params => dispatch<any>(fetchBooks(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);

