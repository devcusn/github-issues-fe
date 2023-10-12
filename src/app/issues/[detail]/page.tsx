import {
  getGithubIssuesDetail,
  getGithubIssuesDetailComments,
} from "@/services/endpoints";
import { GithubIssue } from "@/services/types";
import classes from "./page.module.css";
import DetailHeader from "./components/DetailHeader/DetailHeader";

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
    </div>
  );
};
export default IssueDetail;
