import React, { ChangeEvent } from 'react';

import BooksFiltersProps from './types';
import styles from './BooksFilters.module.scss';

const BooksFilters = ({
  values,
  selectOptions,
  setValues,
}: BooksFiltersProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const isNameChanged = name === 'name';
    setValues({
      ...values,
      [name]: value,
    }, isNameChanged);
  };

  return (
    <div className={styles.filters}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Find a book"
      />
      <select
        className={styles.select}
        name="genre"
        value={values.genre}
        onChange={handleChange}
      >
        {selectOptions.map(item =>
          <option key={item}>{item}</option>
        )}
      </select>
    </div>
  );
};

export default BooksFilters;
