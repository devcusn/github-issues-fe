import classNames from "classnames";

import classes from "./style.module.css";
import { LabelProps } from "./types";

const Label: React.FunctionComponent<LabelProps> = ({
  variant,
  title,
  color,
}) => {
  return (
    <span
      className={classNames(variant, classes.label)}
      style={{ backgroundColor: color }}
    >
      {title}
    </span>
  );
};
export default Label;
