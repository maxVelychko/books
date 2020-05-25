import React, { FC, Fragment } from 'react';

import Pagination from 'components/Pagination';
import { months } from 'constants/date';

import styles from './BooksList.module.scss';

const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const BooksList: FC<any> = ({ books, fetchBooks }) => (
  <Fragment>
    <ul className={styles.list}>
      {books.map((item: any) => {
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
    <Pagination
      containerClassName={styles.paginationContainer}
      loadData={fetchBooks}
    />
  </Fragment>
);

export default BooksList;
