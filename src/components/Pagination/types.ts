import { Pagination } from 'store/types';

export interface PaginationProps {
  containerClassName: string;
  pagination: Pagination;
  loadData: (page: number) => void;
}

export type OnPageChange = (selectedItem: { selected: number }) => void;
