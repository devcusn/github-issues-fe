import SinglePageItem from "./SinglePageItem";
import classes from "./Pagination.module.css";
import { PaginationProps } from "./types";
import Link from "next/link";

const Pagination: React.FunctionComponent<PaginationProps> = ({
  pages,
  currentPage = 1,
}) => {
  const renderedPageItems = Array.from({ length: pages }, (_, i) => i + 1).map(
    (p) => (
      <SinglePageItem
        key={`page-item${p}`}
        page={p}
        isSelected={currentPage === p}
      />
    )
  );
  return (
    <div className={classes.pagination}>
      <Link
        className={classes.link}
        href={`/issues?page=${currentPage === 1 ? 1 : currentPage - 1}`}
      >
        Previous
      </Link>
      <div className={classes.sinle_page_items}>{renderedPageItems}</div>
      <Link
        className={classes.link}
        href={`/issues?page=${currentPage === pages ? pages : currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  );
};
export default Pagination;
