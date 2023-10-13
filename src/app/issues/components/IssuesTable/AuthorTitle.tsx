import Link from "next/link";
import Image from "next/image";

import classes from "./style.module.css";
import { AutherTitleProps } from "./types";

const AuthorTitle: React.FunctionComponent<AutherTitleProps> = ({ user }) => {
  return (
    <Link
      className={classes.select_item}
      href={`/issues?creator=${user.login}`}
      replace
    >
      <Image
        className={classes.user_profile}
        width={20}
        height={20}
        src={user.avatar_url}
        alt="user"
      />
      {user.login}
      {user.site_admin}
    </Link>
  );
};
export default AuthorTitle;
