import {
  getGithubIssuesDetail,
  getGithubIssuesDetailComments,
} from "@/services/endpoints";
import { GithubIssue } from "@/services/types";

import DetailHeader from "./components/DetailHeader/DetailHeader";
import DetailComments from "./components/DetailComments/DetailComments";
import Detail from "./components/Detail/Detail";
import DetailAddInfo from "./components/DetailAddInfo/DetailAddInfo";
import classes from "./style.module.css";

const IssueDetail = async ({ params }: { params: { detail: string } }) => {
  const detail = (await getGithubIssuesDetail({
    issue: params.detail,
  })) as GithubIssue;
  const comments = await getGithubIssuesDetailComments({
    issue: params.detail,
  });

  return (
    <div className={classes.detail_page}>
      <DetailHeader issueDetail={detail} />
      <div className="flex gap-4">
        <div className="w-4/6">
          <Detail issueDetail={detail} />
          <DetailComments comments={comments} />
        </div>
        <div className="w-2/6">
          <DetailAddInfo issueDetail={detail} />
        </div>
      </div>
    </div>
  );
};
export default IssueDetail;
