import React, { FC } from 'react';

import { months } from 'constants/date';

import BooksListProps from './types';
import styles from './BooksList.module.scss';

// ToDo: extract
const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const BooksList: FC<BooksListProps> = ({
  items,
}) => (
  <ul className={styles.list}>
    {items.map((item: any) => {
      const { author, name, genre, date, image } = item;

      return (
        <li
          key={name + date}
          className={styles.row}
        >
          <img className={styles.bookImage} src={image} alt="Book" />
          <div className={styles.bookDescription}>
            <div className={styles.generalText}>
              <span className={styles.name}>{name}</span>
              <span className={styles.authorName}>{author.name}</span>
              <span className={styles.genre}>{genre}</span>
            </div>
            <span className={styles.publishedText}>
              Published on {getFormattedDate(date)}
            </span>
          </div>
        </li>
      )
    })}
  </ul>
);

export default BooksList;
