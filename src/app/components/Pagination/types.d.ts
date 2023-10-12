export type PaginationProps = {
  pages: number;
  currentPage: number;
  perPage: number;
};
export type SinglePageItemProps = {
  page: number | string;
  isSelected: boolean;
};
