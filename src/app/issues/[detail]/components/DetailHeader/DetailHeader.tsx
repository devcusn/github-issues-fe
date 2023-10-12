import { DetailHeaderProps } from "./types";
import classes from "./DetailHeader.module.css";
import { formatDate } from "@/helper/date";
import classNames from "classnames";

const DetailHeader: React.FunctionComponent<DetailHeaderProps> = ({
  issueDetail,
}) => {
  const detailInfo = `${
    issueDetail.user.login
  } opened this issue on ${formatDate(issueDetail.created_at)} · ${
    issueDetail.comments
  } comments`;
  return (
    <div className={classes.detail_header}>
      <div className={classes.detail_header__title}>
        <div className={classes.detail_title}>
          {issueDetail.title}{" "}
          <span
            className={classes.detail_number}
          >{`#${issueDetail.number}`}</span>
        </div>

        <button className={classes.new_issue_btn}>New Issue</button>
      </div>
      <div className="flex justify-items-center gap-4">
        <button className={classNames(classes.btn, classes[issueDetail.state])}>
          {issueDetail.state}
        </button>
        {detailInfo}
      </div>
    </div>
  );
};
export default DetailHeader;
