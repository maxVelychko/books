interface Pagination {
  selectedPage: number;
}

export interface PaginationProps {
  pageCount: number;
  pagination: Pagination;
  setPagination: (selectedPage: number) => void;
}

export type OnPageChange = (selectedItem: { selected: number }) => void;
