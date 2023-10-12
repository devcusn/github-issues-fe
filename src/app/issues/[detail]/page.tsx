import {
  getGithubIssuesDetail,
  getGithubIssuesDetailComments,
} from "@/services/endpoints";
import { GithubIssue } from "@/services/types";
import classes from "./page.module.css";
import DetailHeader from "./components/DetailHeader/DetailHeader";
import DetailComments from "./components/DetailComments/DetailComments";

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
      <DetailComments comments={comments} />
    </div>
  );
};
export default IssueDetail;
