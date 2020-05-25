import React, { FC, useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const perPage = 10;

const Pagination: FC<any> = ({ loadData, containerClassName }) => {
  // const [data, setData] = useState([]);
  // const [offset, setOffset] = useState(0);

  const handlePageClick = (data: any) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    // setOffset(offset);
    // loadData();
  };

  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={perPage}
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
