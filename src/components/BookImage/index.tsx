import React, { FC, useState, SyntheticEvent } from 'react';

import BookImageProps from './types';
import styles from './BookImage.module.scss';

const BookImage: FC<BookImageProps> = ({
  src,
  alt,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
  };

  return (
    <div className={styles.imageContainer}>
      <img
        className={`${styles.image} ${loaded && styles.isShown}`}
        src={src}
        alt={alt}
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default BookImage;
