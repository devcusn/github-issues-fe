import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { DetailHeaderProps } from "../DetailHeader/types";
import classes from "./Detail.module.css";

const Detail: React.FunctionComponent<DetailHeaderProps> = ({
  issueDetail,
}) => {
  return (
    <div>
      <ReactMarkdown className={classes.markdown} remarkPlugins={[gfm]}>
        {issueDetail?.body}
      </ReactMarkdown>
    </div>
  );
};
export default Detail;
