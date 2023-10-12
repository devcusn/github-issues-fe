import { PaginationProps } from "./types";

const Pagination: React.FunctionComponent<PaginationProps> = ({
  pages,
  currentPage = 1,
}) => {
  const renderedPageItems = Array.from({ length: pages }, (_, i) => i + 1).map(
    (p) => <span key={`page-item${p}`}>{p}</span>
  );
  return <div>{renderedPageItems}</div>;
};
export default Pagination;
