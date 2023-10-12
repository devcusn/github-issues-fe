import { SelectProps } from "./types";
import classes from "./Select.module.css";

const Select: React.FunctionComponent<SelectProps> = ({ title, subTitle }) => {
  return <div className={classes.select_component}>{title}</div>;
};
export default Select;
