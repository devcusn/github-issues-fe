import Link from "next/link";
import Image from "next/image";

import Select from "@/app/components/Select/Select";
import CheckIcon from "@/assets/icons/CheckIcon";
import IssueIcon from "@/assets/icons/IssueIcon";

import classes from "./style.module.css";
import { IssueTableHeaderProps } from "./types";
import { SORT_BY } from "./constants";
import AuthorTitle from "./AuthorTitle";
import LabelTitle from "./LabelTitle";

const IssuesTableHeader: React.FunctionComponent<IssueTableHeaderProps> = ({
  labels,
  repoDetail,
  authors,
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
        <Select
          title="Author"
          options={authors.map((user) => ({
            title: <AuthorTitle user={user} />,
            value: user.login,
          }))}
        />
        <Select
          title="Label"
          options={labels.map((l) => ({
            title: <LabelTitle label={l} />,
            value: l.name,
          }))}
        />
        {["Projects", "Milestones", "Review", "Assignee"].map((i) => (
          <Select key={i} title={i} />
        ))}
        <Select
          title="Sort"
          options={SORT_BY.map((s) => ({
            title: (
              <Link
                className={classes.select_item}
                href={`/issues?sort=${s.value}`}
                replace
              >
                {s.title}
              </Link>
            ),
            value: s.title,
          }))}
        />
      </div>
    </>
  );
};

export default IssuesTableHeader;
