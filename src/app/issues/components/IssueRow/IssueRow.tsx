import Image from "next/image";

import Label from "@/app/components/Label/Label";
import MessageIcon from "@/assets/icons/MessageIcon";

import { IssueRowProps } from "./types";
import classes from "./Issue.module.css";
import PullRequestIcon from "@/assets/icons/PullRequestIcon";

const IssueRow: React.FunctionComponent<IssueRowProps> = ({ icon, issue }) => {
  const subtitle = `#${issue.number} opened on Sep 4 by ${issue.user.login}`;

  return (
    <div className={classes.issue}>
      <div>{icon}</div>
      <div className={classes.issue_titles}>
        <div className={classes.issue_title}>
          {issue.title}
          <div className={classes.issue_labels}>
            {issue?.labels?.map((l) => (
              <Label
                key={l.id}
                variant="success"
                title={l.name}
                color={`#${l.color}`}
              />
            ))}
          </div>
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
            <>
              <MessageIcon />
              {issue.comments}
            </>
          )}
        </span>
      </div>
    </div>
  );
};
export default IssueRow;
