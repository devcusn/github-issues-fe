import IssueIcon from "@/assets/icons/IssueIcon";
import classes from "./style.module.css";

const NotFound = () => {
  return (
    <div className={classes.not_found}>
      <IssueIcon />
      <div className={classes.not_found__title}>
        No results matched your search.
      </div>
      <div className={classes.not_found__subtitle}>
        You could search all of GitHub or try an advanced search.
      </div>
    </div>
  );
};
export default NotFound;
