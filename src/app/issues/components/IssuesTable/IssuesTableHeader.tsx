import Link from "next/link";
import Select from "@/app/components/Select/Select";
import CheckIcon from "@/assets/icons/CheckIcon";
import IssueIcon from "@/assets/icons/IssueIcon";

import classes from "./style.module.css";
import { IssueTableHeaderProps } from "./types";

const IssuesTableHeader: React.FunctionComponent<IssueTableHeaderProps> = ({
  labels,
  repoDetail,
}) => {
  return (
    <>
      <div className={classes.table_header__toggle}>
        <Link className={classes.status_link} href={"?q=is%3Aopen+is%3Aissue"}>
          <IssueIcon />
          {`${repoDetail.open_issues_count} Open`}
        </Link>
        <Link className={classes.status_link} href={"?q=is%3Aopen+is%3Aissue"}>
          <CheckIcon />
          11,358 Closed
        </Link>
      </div>
      <div className={classes.table_filter}>
        <Select title="Author" />
        <Select
          title="Label"
          options={labels.map((l) => ({
            title: l.name,
            value: l.name,
          }))}
        />
        <Select title="Projects" />
        <Select title="Milestones" />
        <Select title="Reviews" />
        <Select title="Assignee" />
        <Select title="Sort" />
      </div>
    </>
  );
};

export default IssuesTableHeader;
