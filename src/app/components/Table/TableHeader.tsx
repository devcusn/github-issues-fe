import Link from "next/link";
import classes from "./Table.module.css";
import IssueIcon from "@/assets/icons/IssueIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import Select from "../Select/Select";

const TableHeader = () => {
  return (
    <div className={classes.table_header}>
      <div className={classes.table_header__toggle}>
        <Link className={classes.status_link} href={"?q=is%3Aopen+is%3Aissue"}>
          <IssueIcon />
          1,108 Open
        </Link>
        <Link className={classes.status_link} href={"?q=is%3Aopen+is%3Aissue"}>
          <CheckIcon />
          11,358 Closed
        </Link>
      </div>
      <div className={classes.table_filter}>
        <Select title="Author" />
        <Select title="Label" />
        <Select title="Projects" />
        <Select title="Milestones" />
        <Select title="Reviews" />
        <Select title="Assignee" />
        <Select title="Sort" />
      </div>
    </div>
  );
};
export default TableHeader;
