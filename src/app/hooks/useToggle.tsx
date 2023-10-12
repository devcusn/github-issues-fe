"use client";
import { useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState(false);

  return [toggle, () => setToggle((prev) => !prev)];
};
export default useToggle;
