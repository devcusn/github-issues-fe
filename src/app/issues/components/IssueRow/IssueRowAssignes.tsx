import Image from "next/image";

import classes from "./style.module.css";
import { IssueRowAssignesProps } from "./types";

const IssueRowAssignes: React.FunctionComponent<IssueRowAssignesProps> = ({
  issue,
}) => {
  return (
    <>
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
    </>
  );
};
export default IssueRowAssignes;
