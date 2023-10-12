import CloseIcon from "@/assets/icons/CloseIcon";

import classes from "./style.module.css";
import { SelectPopperProps } from "./types";
const SelectPopper: React.FunctionComponent<SelectPopperProps> = ({
  toggleHandler,
  title,
  options,
}) => {
  return (
    <>
      <div
        className={classes.select_popper__backdrop}
        onClick={toggleHandler}
      />
      <div className={classes.select_popper}>
        <div className={classes.popper_header}>
          <span className={classes.popper_title}>{`Filter By ${title}`}</span>
          <button onClick={toggleHandler}>
            <CloseIcon />
          </button>
        </div>
        <div className={classes.popper_input}>
          <input placeholder="Filter" className={classes.filter_input} />
        </div>

        <div className={classes.select_options}>
          {options?.map((o) => (
            <div key={o.value}>{o.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SelectPopper;
