"use client";
import { useState } from "react";

import CloseIcon from "@/assets/icons/CloseIcon";

import classes from "./style.module.css";
import { SelectPopperProps } from "./types";
import Link from "next/link";

const SelectPopper: React.FunctionComponent<SelectPopperProps> = ({
  toggleHandler,
  title,
  options,
}) => {
  const [filter, setFilter] = useState<string>(null);
  const filteredOptions = options?.filter((w) =>
    filter ? w.value.includes(filter) : true
  );
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
          <input
            onChange={(e) => setFilter(e.currentTarget.value)}
            placeholder="Filter"
            className={classes.filter_input}
          />
        </div>
        <div className={classes.select_options}>
          {
            <div>
              {
                <Link className={classes.select_item} href="/issues" replace>
                  remove filter
                </Link>
              }
            </div>
          }
          {filteredOptions?.map((o) => (
            <div key={o.value}>{o.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SelectPopper;
