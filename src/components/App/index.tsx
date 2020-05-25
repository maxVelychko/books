import React, { useState, ChangeEvent } from 'react';

import BooksListContainer from 'containers/BooksListContainer';
import { ReactComponent as Logo } from 'logo.svg';

import styles from './App.module.scss';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <Logo className={styles.appLogo} />
      </div>
      <div className={styles.appContent}>
        <div className={styles.filters}>
          <input
            className={styles.input}
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search by title"
          />
        </div>
        <BooksListContainer />
      </div>
  </div>
  );
}

export default App;
