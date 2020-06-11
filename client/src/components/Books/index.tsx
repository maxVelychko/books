import React, { FC, Fragment, useState } from 'react';

import Loader from 'components/Loader';
import BooksFilters from 'components/BooksFilters';
import BooksList from 'components/BooksList';
import Pagination from 'components/Pagination';
import { initialSelectOption } from 'constants/filters';
import { Filters } from 'types/filters';

import styles from './Books.module.scss';
import BooksProps from './types';

const Books: FC<BooksProps> = ({
  books,
  booksLoaded,
  fetchBooks,
}) => {
  const [filterValues, setFilterValues] = useState({
    name: '',
    genre: initialSelectOption,
  });
  const [pagination, setPagination] = useState({
    selectedPage: 0,
  });

  const handleSetValues = (params: Filters, isNameChanged: boolean) => {
    setFilterValues(params);
    fetchBooks(params, isNameChanged);
    setPagination({ selectedPage: 0 });
  };

  const handleSetPagination = (selectedPage: number) => {
    setPagination({ selectedPage });
    
    const page = selectedPage + 1;
    fetchBooks({
      page,
      name: filterValues.name,
    });
  };

  const { items, genres, pageCount } = books;
  const selectOptions = [initialSelectOption].concat(genres);

  if (!booksLoaded) {
    return (
      <div className={styles.loaderContainer}>
        <Loader message="Books are loading..." />
      </div>
    );
  }

  return (
    <Fragment>
      <BooksFilters
        values={filterValues}
        selectOptions={selectOptions}
        setValues={handleSetValues}
      />
      <BooksList items={items} />
      <Pagination
        pageCount={pageCount}
        pagination={pagination}
        setPagination={handleSetPagination}
      />
    </Fragment>
  );
};

export default Books;
