import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { DetailHeaderProps } from "../DetailHeader/types";
import classes from "./Detail.module.css";
import SingleComment from "../DetailComments/SingleComment";

const Detail: React.FunctionComponent<DetailHeaderProps> = ({
  issueDetail,
}) => {
  return (
    <>
      <SingleComment comment={issueDetail} />
    </>
  );
};
export default Detail;
