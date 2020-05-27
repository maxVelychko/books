import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

import { PaginationProps, OnPageChange } from './types';
import styles from './Pagination.module.scss';

const Pagination: FC<PaginationProps> = ({
  containerClassName,
  pagination,
  loadData
}) => {
  const handlePageClick: OnPageChange = ({ selected }) => {
    const page = selected + 1;
    loadData(page);
  };

  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={pagination.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={`${containerClassName} ${styles.container}`}
      pageLinkClassName={styles.pageLink}
      previousLinkClassName={styles.previousLink}
      nextLinkClassName={styles.nextLink}
      breakLinkClassName={styles.breakLink}
      activeLinkClassName={styles.activeLink}
      disabledClassName={styles.disabled}
    />
  );
};

export default Pagination;
