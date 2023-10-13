import Link from "next/link";

import classes from "./style.module.css";
import { LabelTitleProps } from "./types";

const LabelTitle: React.FunctionComponent<LabelTitleProps> = ({ label }) => {
  return (
    <Link
      className={classes.select_item}
      href={`/issues?labels=${label.name}`}
      replace
    >
      <span
        className={classes.label}
        style={{
          backgroundColor: `#${label.color}`,
        }}
      />
      {label.name}
    </Link>
  );
};
export default LabelTitle;
