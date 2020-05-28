interface Filters {
  name: string;
}

export default interface FiltersProps {
  filters: Filters;
  setFilters: (params: Filters) => void;
}
