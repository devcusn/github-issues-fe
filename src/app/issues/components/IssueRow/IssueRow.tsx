import Image from "next/image";
import Link from "next/link";

import MessageIcon from "@/assets/icons/MessageIcon";
import PullRequestIcon from "@/assets/icons/PullRequestIcon";
import { timeAgoFormat } from "@/helper/date";

import classes from "./style.module.css";
import { IssueRowProps } from "./types";
import IssueRowLabels from "./IssueRowLabels";
import IssueRowAssignes from "./IssueRowAssignes";

const IssueRow: React.FunctionComponent<IssueRowProps> = ({ icon, issue }) => {
  const subtitle = `#${issue.number} opened ${timeAgoFormat(
    issue.created_at
  )} by ${issue.user.login}`;

  return (
    <div className={classes.issue}>
      <div>{icon}</div>
      <div className={classes.issue_titles}>
        <div className={classes.issue_title}>
          <Link
            className={classes.issue_title__link}
            href={`issues/${issue.number}`}
          >
            {issue.title}
          </Link>
          <IssueRowLabels issue={issue} />
        </div>
        <div className={classes.issue_subTitle}>{subtitle}</div>
      </div>
      <div className={classes.issue_infos}>
        <span className={classes.issue_infos__info}>
          {issue?.pull_request && (
            <>
              <PullRequestIcon />1
            </>
          )}
        </span>
        <span className={classes.issue_infos__info}>
          <IssueRowAssignes issue={issue} />
        </span>
        <span className={classes.issue_infos__info}>
          {issue.comments > 1 && (
            <Link
              className={classes.issue_messages}
              href={`issues/${issue.number}`}
            >
              <MessageIcon />
              {issue.comments}
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};
export default IssueRow;
