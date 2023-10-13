import classes from "./style.module.css";
import { TableHeaderProps } from "./types";

const TableHeader: React.FunctionComponent<TableHeaderProps> = ({
  children,
}) => {
  return <div className={classes.table_header}>{children}</div>;
};
export default TableHeader;
