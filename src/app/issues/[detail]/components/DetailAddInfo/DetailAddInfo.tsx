import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { DetailHeaderProps } from "../DetailHeader/types";
import classes from "./style.module.css";
import DetailSingleInfo from "./DetailISingleInfo";

const DetailAddInfo: React.FunctionComponent<DetailHeaderProps> = ({
  issueDetail,
}) => {
  return (
    <div>
      <DetailSingleInfo title="Assignees" content={"No  one assigned"} />
      <DetailSingleInfo title="Labels" content={"No Labels"} />
      <DetailSingleInfo title="Projects" content="None yet" />
      <DetailSingleInfo title="Milestone" content="No Projects" />
      <DetailSingleInfo title="Development" content="No Projects" />
      <DetailSingleInfo title="Notificitions" content="No Projects" />
      <DetailSingleInfo title={"Participitants"} content="No Projects" />
    </div>
  );
};
export default DetailAddInfo;
