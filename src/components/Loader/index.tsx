import React, { FC } from 'react';

import LoaderProps from './types';
import styles from './Loader.module.scss';

const Loader: FC<LoaderProps> = ({ message }) => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader} />
    <span className={styles.loadingText}>
      {message ? message : "Loading..."}
    </span>
  </div>
);

export default Loader;
