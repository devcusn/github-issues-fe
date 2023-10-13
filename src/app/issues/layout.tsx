import classes from "./style.module.css";
import { LayoutProps } from "./types";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};
export default Layout;
