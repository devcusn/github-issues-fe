import classes from "./Table.module.css";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import { TableProps } from "./types";

const Table: React.FunctionComponent<TableProps> = ({ content }) => {
  return (
    <div className={classes.table}>
      <TableHeader />
      <TableContent content={content} />
    </div>
  );
};
export default Table;
