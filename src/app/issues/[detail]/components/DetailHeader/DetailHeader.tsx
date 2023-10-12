import { DetailHeaderProps } from "./types";
import classes from "./DetailHeader.module.css";
const DetailHeader: React.FunctionComponent<DetailHeaderProps> = ({
  issueDetail,
}) => {
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
      <div>
        <button>Open</button>
        <div>vahnag opened this issue on Aug 28, 2018 · 15 comments</div>
      </div>
    </div>
  );
};
export default DetailHeader;
