import classes from "./style.module.css";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import { TableProps } from "./types";

const Table: React.FunctionComponent<TableProps> = ({ content, header }) => {
  return (
    <div className={classes.table}>
      <TableHeader>{header}</TableHeader>
      <TableContent content={content} />
    </div>
  );
};
export default Table;
