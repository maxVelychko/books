import React, { FC, Fragment, useState } from 'react';

import Filters from 'components/Filters';
import BooksList from 'components/BooksList';
import Pagination from 'components/Pagination';

import { BooksProps, FiltersParams } from './types';
import styles from './Books.module.scss';

const Books: FC<BooksProps> = ({
  books,
  booksLoaded,
  fetchBooks,
}) => {
  const [filters, setFilters] = useState({
    name: '',
  });
  const [pagination, setPagination] = useState({
    selectedPage: 0,
  });

  const handleSetFilters = (params: FiltersParams) => {
    setFilters(params);
    fetchBooks(params);
    setPagination({ selectedPage: 0 });
  };

  const handleSetPagination = (selectedPage: number) => {
    setPagination({ selectedPage });
    
    const page = selectedPage + 1;
    fetchBooks({
      page,
      name: filters.name,
    });
  };

  const { items, pageCount } = books;

  return (
    <Fragment>
      <Filters
        filters={filters}
        setFilters={handleSetFilters}
      />
      {/* ToDo, apply booksLoaded prop */}
      <BooksList items={items} />
      <Pagination
        containerClassName={styles.paginationContainer}
        pageCount={pageCount}
        pagination={pagination}
        setPagination={handleSetPagination}
      />
    </Fragment>
  );
};

export default Books;
