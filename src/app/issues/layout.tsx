import { LayoutProps } from "@/src/app/issues/types";

import classes from "@/app/issues/Layout.module.css";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};
export default Layout;
