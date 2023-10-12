"use client";
import { SelectProps } from "./types";
import classes from "./Select.module.css";
import DropDownIcon from "@/assets/icons/DropDownIcon";
import useToggle from "@/app/hooks/useToggle";

const Select: React.FunctionComponent<SelectProps> = ({ title, subTitle }) => {
  const [toggle, toggleHandler] = useToggle();
  return (
    <div className={classes.select_component}>
      <button
        onClick={() => toggleHandler()}
        className={classes.select_component_button}
      >
        {title} <DropDownIcon />
      </button>
      {toggle && (
        <div className={classes.select_popper}>
          <input className={classes.filter_input} />
        </div>
      )}
    </div>
  );
};
export default Select;
