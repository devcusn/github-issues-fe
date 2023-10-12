import classNames from "classnames";

import classes from "./Label.module.css";
import { LabelProps } from "./types";

const Label: React.FunctionComponent<LabelProps> = ({
  variant,
  title,
  color,
}) => {
  return (
    <div
      className={classNames(variant, classes.label)}
      style={{ backgroundColor: color }}
    >
      {title}
    </div>
  );
};
export default Label;
