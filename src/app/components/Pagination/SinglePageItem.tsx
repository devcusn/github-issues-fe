"use-client";
import classNames from "classnames";
import { SinglePageItemProps } from "./types";

import classes from "./style.module.css";
import Link from "next/link";

const SinglePageItem: React.FunctionComponent<SinglePageItemProps> = ({
  page,
  isSelected,
}) => {
  const link = typeof page === "string" ? "" : `issues?page=${page}`;
  return (
    <Link
      href={link}
      className={classNames(classes.single_page_item, {
        [classes.single_page_item__selected]: isSelected,
      })}
    >
      {page}
    </Link>
  );
};
export default SinglePageItem;
