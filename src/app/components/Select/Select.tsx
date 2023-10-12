"use client";
import { SelectProps } from "./types";
import classes from "./style.module.css";
import DropDownIcon from "@/assets/icons/DropDownIcon";
import useToggle from "@/hooks/useToggle";

const Select: React.FunctionComponent<SelectProps> = ({
  title,
  subTitle,
  options,
}) => {
  const [toggle, toggleHandler] = useToggle();
  console.log(options);
  return (
    <div className={classes.select_component}>
      <button
        onClick={() => toggleHandler()}
        className={classes.select_component_button}
      >
        {title} <DropDownIcon />
      </button>
      {toggle && (
        <>
          <div
            className={classes.select_popper__backdrop}
            onClick={toggleHandler}
          />
          <div className={classes.select_popper}>
            <div>{`Filter By ${title}`} close</div>
            <input className={classes.filter_input} />
            <div className={classes.select_options}>
              {options?.map((o) => (
                <div key={o.value}>{o.title}</div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Select;
