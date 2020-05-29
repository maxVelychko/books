import { Filters } from 'types/filters';

export default interface BooksFiltersProps {
  values: Filters;
  selectOptions: string[];
  setValues: (params: Filters) => void;
}
