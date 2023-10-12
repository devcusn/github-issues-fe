import Link from "next/link";
import Image from "next/image";

import Select from "@/app/components/Select/Select";
import CheckIcon from "@/assets/icons/CheckIcon";
import IssueIcon from "@/assets/icons/IssueIcon";

import classes from "./style.module.css";
import { IssueTableHeaderProps } from "./types";

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
            title: (
              <Link href={`/issues?creator=${user.login}`} replace>
                <Image
                  width={20}
                  height={20}
                  src={user.avatar_url}
                  alt="user"
                />
                {user.login}
                {user.site_admin}
              </Link>
            ),
            value: user.login,
          }))}
        />
        <Select
          title="Label"
          options={labels.map((l) => ({
            title: (
              <Link href={"/issues/created_by/asm89"}>
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: `#${l.color}`,
                  }}
                />
                {l.name}
              </Link>
            ),
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
