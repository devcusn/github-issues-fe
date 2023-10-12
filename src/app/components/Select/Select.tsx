"use client";
import DropDownIcon from "@/assets/icons/DropDownIcon";
import useToggle from "@/hooks/useToggle";

import SelectPopper from "./SelectPopper";
import classes from "./style.module.css";
import { SelectProps } from "./types";

const Select: React.FunctionComponent<SelectProps> = ({ title, options }) => {
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
        <SelectPopper
          options={options}
          title={title}
          toggleHandler={toggleHandler}
        />
      )}
    </div>
  );
};
export default Select;
