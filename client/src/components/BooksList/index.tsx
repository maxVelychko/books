import React, { FC } from 'react';

import BookImage from 'components/BookImage';
import getFormattedDate from 'helpers/getFormattedDate';

import BooksListProps from './types';
import styles from './BooksList.module.scss';

const BooksList: FC<BooksListProps> = ({
  items,
}) => {
  if (!items.length) {
    return (
      <p className={styles.noResults}>
        <span className={styles.boldText}>Sorry.</span>{' '}
        We did not find any results
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {items.map((item: any) => {
        const { author, name, genre, date, image } = item;

        return (
          <li
            key={name + date}
            className={styles.listItem}
          >
            <BookImage src={image} alt="Book" />
            <div className={styles.descriptionContainer}>
              <div className={styles.description}>
                <span className={styles.name} title={name}>{name}</span>
                <span className={styles.authorName} title={author.name}>{author.name}</span>
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
};

export default BooksList;
