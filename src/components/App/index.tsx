import React from 'react';

import BooksContainer from 'containers/BooksContainer';
import { ReactComponent as Logo } from 'logo.svg';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <div className={styles.appHeader}>
      <Logo className={styles.appLogo} />
    </div>
    <div className={styles.appContent}>
      <BooksContainer />
    </div>
  </div>
);

export default App;
