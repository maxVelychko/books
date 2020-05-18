import { connect } from 'react-redux';

import BooksList from 'components/BooksList';
import {
  getBooksSelector,
  getBooksLoadedSelector,
} from 'store/selectors';
import { State } from 'store/types';

import { StateProps } from './types';

const mapStateToProps = (state: State): StateProps => ({
  books: getBooksSelector(state),
  booksLoaded: getBooksLoadedSelector(state),
});

export default connect(mapStateToProps)(BooksList);
