import { IssueRowProps } from "./types";
import classes from "./Issue.module.css";

const IssueRow: React.FunctionComponent<IssueRowProps> = ({ icon, issue }) => {
  const subtitle = `#${issue.number} opened on Sep 4 by ${issue.user.login}`;
  return (
    <div className={classes.issue}>
      <div>{icon}</div>
      <div className={classes.issue_titles}>
        <div className={classes.issue_title}>{issue.title}</div>
        <div className={classes.issue_subTitle}>{subtitle}</div>
      </div>
    </div>
  );
};
export default IssueRow;
