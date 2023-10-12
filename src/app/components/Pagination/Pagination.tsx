import Link from "next/link";

import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import RightArrowIcon from "@/assets/icons/RightArrowIcon";
import { createPaginationItems } from "@/helper/pagination";

import SinglePageItem from "./SinglePageItem";
import classes from "./style.module.css";
import { PaginationProps } from "./types";

const Pagination: React.FunctionComponent<PaginationProps> = ({
  pages,
  currentPage = 1,
  perPage,
}) => {
  const renderedPageItems = createPaginationItems(
    Math.ceil(pages / perPage),
    currentPage
  ).map((p) => (
    <SinglePageItem
      key={`page-item${p}`}
      page={p}
      isSelected={currentPage === p}
    />
  ));

  return (
    <div className={classes.pagination}>
      <Link
        className={classes.link}
        href={`/issues?page=${currentPage === 1 ? 1 : currentPage - 1}`}
      >
        <LeftArrowIcon />
        Previous
      </Link>
      <div className={classes.sinle_page_items}>{renderedPageItems}</div>
      <Link
        className={classes.link}
        href={`/issues?page=${currentPage === pages ? pages : currentPage + 1}`}
      >
        Next
        <RightArrowIcon />
      </Link>
    </div>
  );
};

export default Pagination;
