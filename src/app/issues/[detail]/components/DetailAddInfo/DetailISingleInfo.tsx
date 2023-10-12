import { DetailSingleInfo } from "./types";
import classes from "./style.module.css";

const DetailSingleInfo: React.FunctionComponent<DetailSingleInfo> = ({
  title,
  content,
}) => {
  return (
    <div className={classes.single_info}>
      <div className={classes.single_info__title}>{title}</div>
      <span className={classes.single_info__content}>{content}</span>
    </div>
  );
};
export default DetailSingleInfo;
