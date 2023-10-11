import classes from "./Table.module.css";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

const Table = () => {
  return (
    <div className={classes.table}>
      <TableHeader />
      <TableContent />
    </div>
  );
};
export default Table;
