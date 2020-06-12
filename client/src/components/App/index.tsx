import React from 'react';

import BooksContainer from 'containers/BooksContainer';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.appHeading}>Books</h1>
    <div className={styles.appContent}>
      <BooksContainer />
    </div>
  </div>
);

export default App;
