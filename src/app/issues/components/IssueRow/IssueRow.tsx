import Image from "next/image";
import Link from "next/link";

import Label from "@/app/components/Label/Label";
import MessageIcon from "@/assets/icons/MessageIcon";
import PullRequestIcon from "@/assets/icons/PullRequestIcon";
import { timeAgoFormat } from "@/helper/date";

import classes from "./style.module.css";
import { IssueRowProps } from "./types";

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
          {issue?.labels?.map((l) => (
            <Label
              key={l.id}
              variant="success"
              title={l.name}
              color={`#${l.color}`}
            />
          ))}
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
          {issue?.assignees?.map((a) => (
            <Image
              className={classes.issue_assignee_profile_image}
              width={20}
              height={20}
              key={a.id}
              src={a.avatar_url}
              alt={"assigee profile"}
            />
          ))}
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
