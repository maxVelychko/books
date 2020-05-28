import React, { ChangeEvent } from 'react';

import FiltersProps from './types';
import styles from './Filters.module.scss';

const Filters = ({
  filters,
  setFilters,
}: FiltersProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilters({ name: value });
  };

  return (
    <div className={styles.filters}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={filters.name}
        onChange={handleChange}
        placeholder="Find a book"
      />
    </div>
  );
}

export default Filters;
