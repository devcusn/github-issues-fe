import Image from "next/image";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { SingleCommentProps } from "./types";
import classes from "./styles.module.css";

const SingleComment: React.FunctionComponent<SingleCommentProps> = ({
  comment,
}) => {
  return (
    <div className={classes.single_comment}>
      <Image
        className={classes.user_avatar}
        width={40}
        height={40}
        key={comment.id}
        src={comment.user.avatar_url}
        alt={"assigee profile"}
      />
      <div className={classes.single_comment__content}>
        <div className={classes.single_comment__header}></div>
        <ReactMarkdown className={classes.markdown} remarkPlugins={[gfm]}>
          {comment?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};
export default SingleComment;
