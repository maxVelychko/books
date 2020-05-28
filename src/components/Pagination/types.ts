interface Pagination {
  selectedPage: number;
}

export interface PaginationProps {
  containerClassName: string;
  pageCount: number;
  pagination: Pagination;
  setPagination: (selectedPage: number) => void;
}

export type OnPageChange = (selectedItem: { selected: number }) => void;
